export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Product Lister</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Product Lister</p>
        </footer>
      </body>
    </html>
  );
}