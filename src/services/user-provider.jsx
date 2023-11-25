import { createContext, useEffect, useMemo, useState } from "react";
import { getUserWithRole } from "./user";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [role, setRole] = useState("");
  const value = useMemo(() => ({ role }), [role]);
  async function loadRole() {
    // TODO : should use a loading bar before rendering the content
    const user = await getUserWithRole();
    if (user.Doctor) {
      setRole("doctor");
    } else {
      setRole("patient");
    }
  }
  useEffect(() => {
    loadRole();
  }, [role]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
