import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-links">
      <li>
        <Link to="/nozama">Home</Link>
      </li>
      <li>
        <Link to="/products">Market</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    
      <li>
        <Link to="/login">Login</Link>
      </li>
    </div>
  );
}
export default Nav;
