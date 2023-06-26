import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Nozama</h1>
      <h3>Please check out our lucrative products!</h3>
      <Link to="/products">Market</Link>
    </div>
  );
}
export default Home;
