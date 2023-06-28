import { getCart } from "../../api";
import { useState, useEffect } from "react";
import Cartitem from "./Cartitem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((res) => setProducts(res));
  }, []);

  const browse = (event) => {
    event.preventDefault();
    navigate(`../products`);
  };

  return (
    <div>
      <h1>{sessionStorage.getItem("username")}'s Cart:</h1>
      <button onClick={browse}>Add more items</button>

      {products.map((item, index) => (
        <Cartitem key={index} item={item}></Cartitem>
      ))}
    </div>
  );
}

export default Cart;
