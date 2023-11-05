import { Outlet } from "react-router-dom";
import HomeNav from "../components/home-nav";

const HomePage = () => {
  return (
    <div>
      <HomeNav />
      <Outlet />
    </div>
  );
};

export default HomePage;
