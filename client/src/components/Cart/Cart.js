import { getCart } from "../../api";
import { useState, useEffect } from "react";
import Cartitem from "./Cartitem";
import Nav from "../Navigation/Nav";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((res) => setProducts(res));
  }, []);

  return (
    <div className="App">
      <div className="cart-page">
        <h1>{sessionStorage.getItem("username")}'s Cart:</h1>
        <Nav></Nav>
        <div className="item-container">
          {console.log(products)};
          {products.map((item, index) => (
            <Cartitem key={index} item={item}></Cartitem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
