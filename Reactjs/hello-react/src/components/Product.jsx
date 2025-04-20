import React from "react";

export default function Product({ productDetails }) {
  return (
    <div>
      <h1>Lab 2 - Objective</h1>
      <h2>Product Details</h2>
      <p>
        <b>Product Name: </b>
        {productDetails.productName}
      </p>
      <p>
        <b>Product Price:</b> ₹{productDetails.ProductPrice}/Kg
      </p>
    </div>
  );
}
