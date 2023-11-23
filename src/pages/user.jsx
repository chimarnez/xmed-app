import { useLoaderData } from "react-router-dom";
import ListObject from "../components/list-object";

const UserPage = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <ListObject data={user} />
    </div>
  );
};

export default UserPage;
