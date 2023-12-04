import { createLabeledField, createLabeledSelectField } from "../utils/form";
import { validateEmail, validatePassword } from "../validation/user";

export const formDetail = {
  email: createLabeledField("Email", true, "", "text", validateEmail),
  password: createLabeledField(
    "Contraseña",
    true,
    "",
    "password",
    validatePassword
  ),
  firstName: createLabeledField("Nombre", true),
  lastName: createLabeledField("Apellido", true),
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
  address: createLabeledField("Dirección", true),
  phone: createLabeledField("Teléfono", true),
};
