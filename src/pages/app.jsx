import { Outlet } from "react-router-dom";
import AppNav from "../components/app-nav";

const App = () => {
  return (
    <>
      <AppNav />
      <h1>XMED APP</h1>
      <Outlet />
    </>
  );
};

export default App;
