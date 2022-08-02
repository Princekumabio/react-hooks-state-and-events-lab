import React, { useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(false)

  function handleAddToCart() {
    setAddItem(addItem => !addItem)
  }

  return (
    <li className={addItem ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={addItem ? 'remove' : 'add'}>{addItem ? 'Remove From Cart' : 'Add To Cart'}</button>
    </li>
  );
}

export default Item;
