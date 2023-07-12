import { getCart } from "../../api";
import { useState, useEffect } from "react";
import Cartitem from "./Cartitem";
import { removeItem } from "../../api";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((res) => setProducts(res));
  }, []);

  const handleRemoveItem = (itemId) => {
    setProducts((prevItems) =>
      prevItems.filter((item) => item.itemId !== itemId)
    );
    removeItem(itemId);
  };
  return (
    <div className="App">
      <div className="cart-page">
        <h1 className="home-title">{sessionStorage.getItem("username")}'s Cart:</h1>
        <div className="cart-container">
          {products.map((item, index) => (
            <div className="cart-item" key={index}>
              <Cartitem
                key={index}
                item={item}
                onRemove={handleRemoveItem}
              ></Cartitem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
