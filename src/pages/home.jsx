import { Outlet } from "react-router-dom";
import HomeNav from "../components/home-nav";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <HomeNav />
      <Outlet />
      <Button>Cololololo</Button>
    </div>
  );
};

export default HomePage;
