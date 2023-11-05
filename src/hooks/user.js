import { useContext } from "react";
import { UserContext } from "../services/user";

/**
 *
 * @returns {{user: Object, setUser: () => {}}}
 */
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
