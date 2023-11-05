import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";
import { logout } from "../services/login";

const AppNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="home-nav">
      <ul>
        <div className="right-nav">
          <li>
            <Link to="./users">Profile</Link>
          </li>
          <li>
            <Link to="./doctors">Doctors</Link>
          </li>
          <li>
            <Link to="./patients">Patients</Link>
          </li>
          <li>
            <Link to="./records">Records</Link>
          </li>
        </div>
        <div className="spacer"></div>
        <div className="right-nav">
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default AppNav;
