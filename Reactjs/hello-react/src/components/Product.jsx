import React from "react";

export default function Product({ productDetails }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Name: {productDetails.productName}</p>
      <p>Product Price: ₹{productDetails.ProductPrice}/Kg</p>
    </div>
  );
}
