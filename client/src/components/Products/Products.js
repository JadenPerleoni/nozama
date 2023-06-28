import { useState } from "react";
import { browse } from "../../api/index";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";



function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    browse(searchItems).then((res) => setProducts(res.itemSummaries));
  };
  const viewCart = (event) => {
    event.preventDefault();
    navigate(`../cart`)
  }

  return (
    <div>
      <h1>Nozama marketplace</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search.."
          className="search-bar"
          value={searchItems}
          onChange={(e) => {
            setSearchItems(e.target.value);
          }}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <button onClick={viewCart}>View Cart</button>


      {products.map((product, index) => (
        <Product key={index} item={product}></Product>
      ))}
    </div>
  );
}
export default Products;
