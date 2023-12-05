import { createContext, useCallback, useMemo, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const onNotify = useCallback((message, severity = "info") => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  }, []);
  const value = useMemo(() => ({ notify: onNotify }), [onNotify]);
  return (
    <NotificationContext.Provider value={value}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={onClose}
      >
        <Alert variant="filled" severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
}
