import { useState } from "react";
import { browse } from "../../api/index";
import Product from "../Product/Product";
import Nav from "../Navigation/Nav";

// Component that allows users to search for items

function Products() {
  const [products, setProducts] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    browse(searchItems).then((res) => setProducts(res.itemSummaries));
  };
  return (
    <div className="App">
      <div className="market-page">
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

        <div className="browse-container">
          {products.map((product, index) => (
            <div className="ebay-items" key={index}>
              <Product key={index} item={product}></Product>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Products;
