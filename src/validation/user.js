export function validateEmail(value) {
  let errorMessage = "Tu email debe ser válido";
  const cleanValue = value.trim();
  if (!cleanValue) return errorMessage;
  if (!cleanValue.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) return errorMessage;
  return "";
}

export function validatePassword(value) {
  const cleanValue = value.trim();
  if (!cleanValue || cleanValue.length < 8)
    return "Debe tener al menos 8 caracteres";
  if (cleanValue.match(/\.*\s\.*/)) return "No debe tener espacios vacíos";
  if (
    !cleanValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  ) {
    return "Debe incluir mayúsculas, minúsculas y números";
  }
  return "";
}
