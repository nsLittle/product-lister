"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "./components/SearchBar/page";
import ProductsList from "./components/ProductsList/page";
// import DropDownCategory from "./DropDownCategory/page";
// import DropDownPrice from "./DropDownPrice/page";
// import ReturnButton from "./ReturnButton/page";
// import ProductStats from "./ProductStats/page";
// import LastPage from "./LastPage/page";
// import NextPage from "./NextPage/page";
import "./globals.css";

export default function Home() {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedPrice,
    setSelectedPrice,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useContext(ProductContext);

  const router = useRouter();

  const refreshFilters = () => {
    setSelectedCategory("default");
    setSelectedPrice("default");
    setSearchValue("");
    router.push("/");
  };

  const updateUrl = (newQuery) => {
    const query = {
      category: selectedCategory !== "default" ? selectedCategory : undefined,
      price: selectedPrice !== "default" ? selectedPrice : undefined,
      product: searchValue || undefined,
      ...newQuery,
    };

    const filteredQuery = Object.fromEntries(Object.entries(query).filter(([_, v]) => v != null));

    const queryString = new URLSearchParams(filteredQuery).toString();
    const browserUrl = `?${queryString}`;

    router.replace(browserUrl, undefined, { shallow: true });
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      updateUrl({ page });
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const lastPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handlePriceChange = (sortOption) => {
    setSelectedPrice(sortOption);
    updateUrl({ price: sortOption !== "default" ? sortOption : undefined });
  };

  const handleCategoryChange = (sortOption) => {
    setSelectedCategory(sortOption);
    updateUrl({ category: sortOption !== "default" ? sortOption : undefined });
  };

  const handleSearch = (newValue) => {
    setSearchValue(newValue);
    setSelectedCategory("default");
    setSelectedPrice("default");
    updateUrl({ product: newValue });
  };

  return (
    <main>
      <div className="sort-menu">
        <SearchBar onSearch={handleSearch} value={searchValue} />
        {/* <DropDownCategory onCategoryChange={handleCategoryChange} selectedCategoryOption={selectedCategory} />
        <DropDownPrice onPriceChange={handlePriceChange} selectedPriceOption={selectedPrice} /> */}
      </div>
      <div>
        {/* <ReturnButton refreshFilters={refreshFilters} /> */}
      </div>
      <div>
        <ProductsList selectedCategoryOption={selectedCategory} selectedPriceOption={selectedPrice} items={products} searchValue={searchValue} currentPage={currentPage} />
      </div>
      <div className="stat-link-box">
        {/* <LastPage onClick={lastPage} disabled={currentPage <= 1} currentPage={currentPage} />
        <ProductStats items={products} />
        <NextPage onClick={nextPage} disabled={currentPage >= totalPages} currentPage={currentPage} /> */}
      </div>
    </main>
  );
}
