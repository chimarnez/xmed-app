import { useContext } from "react";
import { NotificationContext } from "../context/notification";

/**
 *
 * @returns {(message: string, severity?: "info" | "error" | "warning" | "success") => void}
 */
export function useNotification() {
  const { notify } = useContext(NotificationContext);
  return notify;
}
