import { useLoaderData } from "react-router-dom";
import AppIndex from "../components/app-index";

const UserPage = () => {
  const user = useLoaderData();
  return (
    <div>
       <AppIndex />
    </div>
  );
};

export default UserPage;
