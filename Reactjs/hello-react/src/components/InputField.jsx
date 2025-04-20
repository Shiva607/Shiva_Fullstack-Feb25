import React, { useState } from "react";

export default function InputField() {
  const [inputValue, setInputValue] = useState("Hello ");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>Lab 3 - Input Field</h1>
      <h2>User Details</h2>
      <p>
        <b>Name: </b>
        {inputValue}
      </p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}
