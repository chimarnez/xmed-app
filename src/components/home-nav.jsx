import { Link } from "react-router-dom";
import "../styles/nav.css";

const HomeNav = () => {
  return (
    <nav className="home-nav">
      <ul>
        <li>
          <Link to="/">XMED</Link>
        </li>
        <span className="spacer" />
        <div className="right-nav">
          <li>
            <Link to="login">Log In</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
          <li>
            <Link to="edit-user">Edit User</Link>
          </li>
          <li>
            <Link to="create-user">Create User</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default HomeNav;
