import React from "react";

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
