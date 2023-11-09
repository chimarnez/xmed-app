import { createContext, useEffect, useMemo, useState } from "react";
import { removeToken } from "./auth";

export const UserContext = createContext(null);

export default function UserProvider({ children, user: initialUser }) {
  const [user, setUser] = useState(initialUser);
  const value = useMemo(() => ({ user, setUser }), [user]);
  useEffect(() => {
    return () => {
      if (!user) removeToken();
    };
  }, [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
