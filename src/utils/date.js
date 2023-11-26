import { format, parse } from "date-fns";
import es from "date-fns/locale/es";
export function formatDate(dateString) {
  const date = new Date(dateString);
  const utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  return format(utcDate, "dd MMMM yyyy", { locale: es });
}

export function formatInputDate(dateString) {
  const date = new Date(dateString);
  return format(date, "yyyy-MM-dd");
}

export function parseFromDateInput(dateFromInput) {
  const date = parse(dateFromInput, "yyyy-MM-dd", new Date());
  return date;
}
