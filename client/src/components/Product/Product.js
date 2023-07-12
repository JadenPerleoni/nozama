import { addItem } from "../../api";
import { useState } from "react";

// Displays product information and allows the user to add it to their cart.
const Product = (item) => {
  const [itemAdded, setItemAdded] = useState(false);

  const addToCart = () => {
    addItem(item.item.itemId);
    setItemAdded(true);
    console.log(item);
  };

  return (
    <div>
      <h3>{item.item.title}</h3>
      <img src={item.item.image.imageUrl} alt={item.title} />
      <p className="price-tag">Price: ${item.item.price.value}</p>{" "}
      <button onClick={addToCart} className="add-button">
        Add to cart
      </button>
      {itemAdded ? <p>Item added</p> : ""}
    </div>
  );
};

export default Product;
