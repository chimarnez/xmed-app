import {
  Dashboard as DashboardIcon,
  PeopleAlt,
  InsertDriveFile,
  Settings,
  //   Vaccines,
  MedicalInformation,
  MonitorHeart,
} from "@mui/icons-material";

export const PATIENT_ROUTES_INFO = {
  blog: { name: "Inicio", path: "blog", icon: DashboardIcon },
  users: { name: "Perfil", path: "users", icon: PeopleAlt },
  patients: { name: "Pacientes", path: "patients", icon: MonitorHeart },
  doctors: { name: "Doctores", path: "doctors", icon: MedicalInformation },
  records: { name: "Expedientes", path: "records", icon: InsertDriveFile },
  settings: { name: "Ajustes", path: "settings", icon: Settings },
};

export const DOCTOR_ROUTES_INFO = {
  blog: { name: "Inicio", path: "blog", icon: DashboardIcon },
  users: { name: "Perfil", path: "users", icon: PeopleAlt },
  patients: {
    name: "Mis pacientes",
    path: "doctors-patients",
    icon: MonitorHeart,
  },
  records: {
    name: "Mis expedientes",
    path: "doctors-records",
    icon: InsertDriveFile,
  },
  settings: { name: "Ajustes", path: "settings", icon: Settings },
};

export const PATIENT_DRAWER_ITEMS = Object.keys(PATIENT_ROUTES_INFO).map(
  (routeName) => PATIENT_ROUTES_INFO[routeName]
);

export const DOCTOR_DRAWER_ITEMS = Object.keys(DOCTOR_ROUTES_INFO).map(
  (routeName) => DOCTOR_ROUTES_INFO[routeName]
);
