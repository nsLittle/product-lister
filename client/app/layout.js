import { ProductProvider } from "../context/ProductContext";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <header>
          <h1>Product Lister</h1>
        </header>
        <main>
          <ProductProvider>
            {children}
          </ProductProvider>
        </main>
        <footer>
          <p>© {new Date().getFullYear()} Product Lister</p>
          <p>Favicon: Didik Graphic from <a href="https://thenounproject.com/browse/icons/term/products/" target="_blank" title="products Icons">Noun Project</a> (CC BY 3.0)</p>
        </footer>
      </body>
    </html>
  );
}