import React, { useState } from "react";

function Item({ name, category }) {
const [isInCart, setIsInCart] = useState(false);
const itemName = isInCart ? "in-cart" : "";

function handleInCartClick(){
  setIsInCart(!isInCart);
}

  return (
    <li className={itemName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCartClick} >Add to Cart</button>
    </li>
  );
}

export default Item;
