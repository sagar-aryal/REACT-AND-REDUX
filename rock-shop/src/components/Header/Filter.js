import React from "react";

const Filter = () => {
  return (
    <div>
      Category
      <select>
        <option>Men's Clothing</option>
        <option>Women's Clothing</option>
        <option>Jewelery</option>
        <option>Electronics</option>
      </select>
      <div>
        Price
        <select>
          <option>Lowest</option>
          <option>Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
