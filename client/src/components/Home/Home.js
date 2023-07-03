import Nav from "../Navigation/Nav";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { randomItem } from "../../api";

function Home() {
  const [randomProd, setRandomProd] = useState([]);

  useEffect(() => {
    randomItem().then((res) => setRandomProd(res));
  }, []);
  return (
    <div className="App">
      <div className="home">
        <h1>Nozama</h1>
        <Nav></Nav>

        <h3>Please check out our lucrative products!</h3>
        <h2>Check out this cool item!</h2>
        <div className="item-container">
          {randomProd.map((item, index) => (
            <Product key={index} item={item}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
