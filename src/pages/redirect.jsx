import { useLocation, Navigate } from "react-router-dom";

const AppRedirect = () => {
  const location = useLocation();
  const { toPath } = location.state;
  return <Navigate to={toPath} />;
};

export default AppRedirect;
