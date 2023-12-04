import { createLabeledField } from "../utils/form";

export const formDetail = {
  healthInsurance: createLabeledField("Seguro de salud"),
  bloodType: createLabeledField("Tipo de sangre", true, "O+"),
  weight: createLabeledField("Peso", false, 60),
  height: createLabeledField("Altura", false, 1.5),
  allergies: createLabeledField("Alergias", false, "Ninguna"),
  chronicDiseases: createLabeledField(
    "Enfermedades crónicas",
    false,
    "Ninguna"
  ),
  currentMedication: createLabeledField("Medicación actual", false, "Ninguna"),
  familyHistory: createLabeledField("Historial familiar", false, "Ninguna"),
};

export const defaultValues = Object.fromEntries(
  Object.entries(formDetail).map(([key, field]) => [key, field.default ?? ""])
);
