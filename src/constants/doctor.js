import { createLabeledField } from "../utils/form";

export const formDetail = {
  specialization: createLabeledField("Especialización", true),
  medicalLicence: createLabeledField("Licencia médica", true),
};
