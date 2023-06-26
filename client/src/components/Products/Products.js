import { useEffect, useState } from "react";
import { browse } from "../../api/index";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    browse().then((res) => setProducts(res.itemSummaries));
  }, []);

  return (
    <div>
      <h1>Dogecoin(steal )</h1>
      {products.map((product) => (
        <div key={product.itemId}>
          <img src={product.image.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Rating: {product.averageRating}</p>{" "}
        </div>
      ))}
    </div>
  );
}
export default Products;
