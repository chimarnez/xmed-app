import { Outlet } from "react-router-dom";
import HomeNav from "../components/home-nav";

const RootPage = () => {
  return (
    <>
      <HomeNav />
      <Outlet />
    </>
  );
};

export default RootPage;
