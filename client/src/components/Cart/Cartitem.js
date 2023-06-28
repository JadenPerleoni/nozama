const Cartitem = (item) => {
  return (
    <div className="cart-item">
      <h3>{item.item.title}</h3>
      <img src={item.item.image.imageUrl} alt={item.title} />
      <p>Price: ${item.item.price.value}</p>{" "}
    </div>
  );
};
export default Cartitem;
