export const form = {
  email: { label: "Email", required: true },
  password: { label: "Contraseña", required: true, type: "password" },
  firstName: { label: "Nombre", required: true },
  lastName: { label: "Apellido", required: true },
  birthDate: {
    label: "Fecha de nacimiento",
    required: true,
    type: "date",
    default: "1980-01-01",
  },
  gender: {
    label: "Género",
    required: true,
    type: "select",
    options: [
      { value: "M", label: "Masculino" },
      { value: "F", label: "Femenino" },
      { value: "O", label: "Otro" },
    ],
  },
  address: { label: "Dirección", required: true },
  phone: { label: "Teléfono", required: true },
};
