import { getCart } from "../../api";
import { useState, useEffect } from "react";
import Cartitem from "./Cartitem";
function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((res) => setProducts(res));
  }, []);

  return (
    <div >
      <h1>Cart:</h1>
      {products.map((item,index) => (
          <Cartitem key={index} item={item}></Cartitem>

      ))}
    </div>
  );
}

export default Cart;
