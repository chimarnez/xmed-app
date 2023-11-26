import {
  Dashboard as DashboardIcon,
  PeopleAlt,
  InsertDriveFile,
  Settings,
  MedicalInformation,
  PersonSearch,
} from "@mui/icons-material";
import HealthIcon from "../components/icons/heart-icon";

const blog = { name: "Inicio", path: "blog", icon: DashboardIcon };
const users = { name: "Perfil", path: "users", icon: PeopleAlt };
const medicalInformation = {
  name: "Mi salud",
  path: "medical-information",
  icon: HealthIcon,
};
const medicalHistory = {
  name: "Mi historial",
  path: "medical-history",
  icon: MedicalInformation,
};
const doctors = {
  name: "Doctores",
  path: "doctors",
  icon: PersonSearch,
};
const settings = { name: "Ajustes", path: "settings", icon: Settings };

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
    path: "doctors-patients",
    icon: PeopleAlt,
  },
  records: {
    name: "Expedientes",
    path: "doctors-records",
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
