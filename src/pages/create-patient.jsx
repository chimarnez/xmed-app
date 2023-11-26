import EditPatient from "../components/edit-patient";
import { defaultValues } from "../constants/patient";

const CreatePatientPage = () => {
  const patient = { ...defaultValues };
  return <EditPatient patient={patient} edit={false} />;
};

export default CreatePatientPage;
