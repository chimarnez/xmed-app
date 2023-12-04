import { createLabeledField, createLabeledSelectField } from "../utils/form";
import {
  validateEmail,
  validateFilled,
  validateName,
  validatePassword,
  validatePhone,
} from "../validation/user";

export const formDetail = {
  email: createLabeledField("Email", true, "", "text", validateEmail),
  password: createLabeledField(
    "Contraseña",
    true,
    "",
    "password",
    validatePassword
  ),
  firstName: createLabeledField("Nombre", true, "", "text", validateName),
  lastName: createLabeledField("Apellido", true, "", "text", validateName),
  birthDate: createLabeledField(
    "Fecha de nacimiento",
    true,
    "1980-01-01",
    "date"
  ),
  gender: createLabeledSelectField("Género", true, "O", [
    { value: "M", label: "Masculino" },
    { value: "F", label: "Femenino" },
    { value: "O", label: "Otro" },
  ]),
  address: createLabeledField("Dirección", true, "", "text", validateFilled),
  phone: createLabeledField("Teléfono", true, "", "text", validatePhone),
};
