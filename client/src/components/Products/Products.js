import { useEffect, useState } from "react";
import { browse, addItem } from "../../api/index";
import Product  from "../Product/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    browse(searchItems).then((res) => setProducts(res.itemSummaries));
  };


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

      {products.map((product,index) => (
        
          <Product key={index} item={product}></Product>
      ))}
    </div>
  );
}
export default Products;
