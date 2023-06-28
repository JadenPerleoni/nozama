import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Nozama</h1>
      <h3>Please check out our lucrative products!</h3>
      <p></p><Link to="/products">Market</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

    </div>
  );
}
export default Home;
