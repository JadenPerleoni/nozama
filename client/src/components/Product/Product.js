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
      <img src={item.item.image.imageUrl} alt={item.title} />
      <h3>{item.item.title}</h3>
      <p>Rating: {item.item.averageRating}</p>{" "}
      <p>Price: ${item.item.price.value}</p>{" "}
      <button onClick={addToCart}>Add to cart</button>
      {itemAdded ? <p>Item added</p> : ""}
    </div>
  );
};

export default Product;
