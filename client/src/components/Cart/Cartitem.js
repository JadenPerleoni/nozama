const Cartitem = ({ item, onRemove }) => {
  const removeFromCart = () => {
    onRemove(item.itemId);
  };
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.image.imageUrl} alt={item.title} />
      <p>Price: ${item.price.value}</p>{" "}
      <button onClick={removeFromCart} className="add-button">Remove from cart</button>
    </div>
  );
};
export default Cartitem;
