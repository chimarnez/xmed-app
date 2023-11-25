import { useContext } from "react";
import { UserContext } from "../services/user-provider";

/**
 *
 * @returns {string}
 */
export function useUserRole() {
  const context = useContext(UserContext);
  return context.role;
}
