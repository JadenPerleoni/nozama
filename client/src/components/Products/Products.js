import { useState } from "react";
import { browse } from "../../api/index";
import Product from "../Product/Product";

// Component that allows users to search for items

function Products() {
  const [products, setProducts] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [sortingOption, setSortingOption] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    browse(searchItems).then((res) => setProducts(res.itemSummaries));
    setSortingOption(true);
  };

  const handleSort = (sortOption) => {
    let sortedProducts = [];

    switch (sortOption) {
      case "name":
        sortedProducts = [...products].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "price":
        sortedProducts = [...products].sort(
          (a, b) => b.price.value - a.price.value
        );
        break;
      default:
        sortedProducts = products;
    }
    setProducts(sortedProducts);
  };
  return (
    <div className="App">
      <div className="market-page">
        <h1 className="home-title">Nozama marketplace</h1>

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

        {sortingOption ? (
          <div>
            Sort by:
            <button onClick={() => handleSort("name")}>Item name</button>
            <button onClick={() => handleSort("price")}>Item Price (high to low)</button>
          </div>
        ) : (
          ""
        )}

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
