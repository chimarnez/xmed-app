import {
  Dashboard as DashboardIcon,
  PeopleAlt,
  InsertDriveFile,
  Settings,
  //   Vaccines,
  MedicalInformation,
  MonitorHeart,
} from "@mui/icons-material";

export const ROUTES_INFO = {
  blog: { name: "Inicio", path: "blog", icon: DashboardIcon },
  users: { name: "Perfil", path: "users", icon: PeopleAlt },
  patients: { name: "Pacientes", path: "patients", icon: MonitorHeart },
  doctors: { name: "Doctores", path: "doctors", icon: MedicalInformation },
  records: { name: "Expedientes", path: "records", icon: InsertDriveFile },
  settings: { name: "Ajustes", path: "settings", icon: Settings },
};

export const DRAWER_ITEMS = Object.keys(ROUTES_INFO).map(
  (routeName) => ROUTES_INFO[routeName]
);
