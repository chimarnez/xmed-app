import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserRole } from "../hooks/user";
import {
  PATIENT_DRAWER_ITEMS as patientItems,
  DOCTOR_DRAWER_ITEMS as doctorItems,
} from "../constants/routes-icons";

export const AppDrawerList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const role = useUserRole();
  if (!role) return null;
  const items = role === "doctor" ? doctorItems : patientItems;

  const listItems = items.map((item, i) => {
    let selected = item.path === "" && pathname === "/app";
    if (!selected && item.path !== "") {
      selected = pathname.includes(item.path);
    }
    return (
      <ListItemButton
        selected={selected}
        key={item.path + i}
        onClick={() => navigate(item.path)}
      >
        <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
    );
  });
  return <List component="nav">{listItems}</List>;
};
