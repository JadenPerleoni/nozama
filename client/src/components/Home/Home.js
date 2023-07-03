import Nav from "../Navigation/Nav";
import { useState, useEffect } from "react";
import Product from "../Product/Product";

function Home() {
  const [randomProd, setRandomProd] = useState([]);
  return (
    <div className="home">
      <h1>Nozama</h1>
      <Nav></Nav>

      <h3>Please check out our lucrative products!</h3>
      <h2>Check out this cool item!</h2>
      <div className="random-product"></div>
    </div>
  );
}
export default Home;
