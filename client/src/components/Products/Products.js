import { useEffect, useState } from "react";
import { browse } from "../../api/index";

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

      {products.map((product) => (
        <div className="ebay-items" key={product.itemId}>
          <img src={product.image.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Rating: {product.averageRating}</p>{" "}
          <p>Price: ${product.price.value}</p>{" "}
        </div>
      ))}
    </div>
  );
}
export default Products;
