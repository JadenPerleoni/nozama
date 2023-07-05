const Cartitem = ({ item, onRemove }) => {
  const removeFromCart = () => {
    onRemove(item.itemId);
  };
  return (
    <div className="cart-item">
      {console.log(item)}
      <h3>{item.title}</h3>
      <img src={item.image.imageUrl} alt={item.title} />
      <p>Price: ${item.price.value}</p>{" "}
      <button onClick={removeFromCart}>Remove from cart</button>
    </div>
  );
};
export default Cartitem;
