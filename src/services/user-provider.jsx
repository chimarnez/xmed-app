import { createContext, useEffect, useMemo, useState } from "react";
import { getUserWithRole } from "./user";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [role, setRole] = useState("patient");
  const value = useMemo(() => ({ role }), [role]);
  async function loadRole() {
    const user = await getUserWithRole();
    if (user.Doctor) {
      setRole("doctor");
    }
  }
  useEffect(() => {
    loadRole();
  }, [role]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
