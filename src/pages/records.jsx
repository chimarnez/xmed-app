import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import ListObject from "../components/list-object";

const RecordsPage = () => {
  const records = useLoaderData();
  const recordsList = records.map((o) => {
    return (
      <div key={o.id} style={{ marginBottom: "1rem" }}>
        <ListObject data={o} />
        <Link to={`${o.id}`}>Más detalles</Link>
      </div>
    );
  });
  return (
    <>
      <div>{recordsList}</div>
    </>
  );
};

export default RecordsPage;
