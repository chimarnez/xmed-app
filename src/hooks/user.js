import { useContext } from "react";
import { UserContext } from "../services/user-provider";

/**
 *
 * @returns {{user: Object, setUser: () => {}}}
 */
export function useUserRole() {
  const context = useContext(UserContext);
  return context.role;
}
