import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <ProductCard name="Laptop" price={750} inStock={true} />
      <ProductCard name="Headphones" price={120} inStock={false} />
      <ProductCard name="Smartphone" price={500} inStock={true} />
    </div>
  );
}

export default App;

