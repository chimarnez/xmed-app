import { formatKey } from "../utils/text";

const ListObject = ({
  data,
  ignore = [
    "updatedAt",
    "createdAt",
    "id",
    "password",
    "UserId",
    "DoctorId",
    "PatientId",
  ],
}) => {
  const list = Object.entries(data).map(([key, value]) => {
    if (ignore.includes(key)) return null;
    return (
      <p key={key}>
        {formatKey(key)}: {value}
      </p>
    );
  });
  return <>{list}</>;
};

export default ListObject;
