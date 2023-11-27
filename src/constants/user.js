export const userForm = {
  email: { required: true },
  password: { required: true, label: "contraseña", type: "password" },
  firstName: { required: true, label: "nombre" },
  lastName: { required: true, label: "apellido" },
  birthDate: { required: true, label: "fecha de nacimiento", type: "date" },
  gender: { required: true, label: "género", type: "select", options: [{}] },
};

export const fieldNames = {
  email: "email",
  password: "contraseña",
  firstName: "nombre",
  lastName: "apellido",
  birthDate: "fecha de nacimiento",
  gender: "género",
};

export const defaultValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  gender: "",
};
