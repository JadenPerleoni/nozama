import { addItem } from "../../api";

const Product = (item) => {
  const addToCart = () => {
    addItem(item.item.itemId)
  };

  return (
    <div className="ebay-items">
      <img src={item.item.image.imageUrl} alt={item.title} />
      <h3>{item.item.title}</h3>
      <p>Rating: {item.item.averageRating}</p>{" "}
      <p>Price: ${item.item.price.value}</p>{" "}
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;