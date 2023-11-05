import { useLoaderData } from "react-router-dom";
import ListObject from "../components/list-object";

const UserPage = () => {
  const user = useLoaderData();
  return (
    <div>
      <ListObject data={user} />
    </div>
  );
};

export default UserPage;
