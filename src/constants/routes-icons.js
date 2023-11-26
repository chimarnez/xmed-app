import {
  Dashboard as DashboardIcon,
  PeopleAlt,
  InsertDriveFile,
  Settings,
  MedicalInformation,
  PersonSearch,
} from "@mui/icons-material";
import * as routes from "./route-names";
import HealthIcon from "../components/icons/heart-icon";

const blog = { name: "Inicio", path: routes.BLOG, icon: DashboardIcon };
const users = { name: "Perfil", path: routes.USERS, icon: PeopleAlt };
const medicalInformation = {
  name: "Mi salud",
  path: routes.MEDICAL_INFORMATION,
  icon: HealthIcon,
};
const medicalHistory = {
  name: "Mi historial",
  path: routes.MEDICAL_HISTORY,
  icon: MedicalInformation,
};
const doctors = {
  name: "Doctores",
  path: routes.DOCTORS,
  icon: PersonSearch,
};
const settings = { name: "Ajustes", path: routes.SETTINGS, icon: Settings };

export const PATIENT_ROUTES_INFO = {
  blog,
  users,
  medicalInformation,
  medicalHistory,
  doctors,
  settings,
};

export const DOCTOR_ROUTES_INFO = {
  blog,
  users,
  patients: {
    name: "Pacientes",
    path: routes.PATIENTS,
    icon: PeopleAlt,
  },
  records: {
    name: "Expedientes",
    path: routes.RECORDS,
    icon: InsertDriveFile,
  },
  medicalInformation,
  medicalHistory,
  doctors,
  settings,
};

export const PATIENT_DRAWER_ITEMS = Object.keys(PATIENT_ROUTES_INFO).map(
  (routeKey) => PATIENT_ROUTES_INFO[routeKey]
);

export const DOCTOR_DRAWER_ITEMS = Object.keys(DOCTOR_ROUTES_INFO).map(
  (routeKey) => DOCTOR_ROUTES_INFO[routeKey]
);
