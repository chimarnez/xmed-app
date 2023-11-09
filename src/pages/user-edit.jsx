import { useLocation } from "react-router-dom";

const UserEditPage = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <h2>{pathname.includes("create") ? "Crear" : "Editar"} Usuario</h2>
    </div>
  );
};

export default UserEditPage;
