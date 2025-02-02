"use client";

import React, { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

export default function SearchBar() {
  const { searchValue, setSearchValue } = useContext(ProductContext);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <main>
      <input
        className="search-bar"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
    </main>
  );
}
