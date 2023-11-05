import { Navigate } from "react-router-dom";
import { useUserContext } from "../hooks/user";

const WithUser = ({ children }) => {
  const { user } = useUserContext();
  if (!user) return <Navigate to="/" replace />;
  return <>{children}</>;
};

export default WithUser;
