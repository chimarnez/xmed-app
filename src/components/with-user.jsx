import { Navigate } from "react-router-dom";
import { useUserContext } from "../hooks/user";

const WithUser = ({ children }) => {
  const { user } = useUserContext();
  !user ? <Navigate to="/" replace /> : <>{children}</>;
};

export default WithUser;
