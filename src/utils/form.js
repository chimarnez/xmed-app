export function createLabeledField(
  label = "",
  required = false,
  defaultValue = "",
  type = "text",
  validation
) {
  return { label, required, default: defaultValue, type, validation };
}

export function createLabeledSelectField(
  label = "",
  required = false,
  defaultValue = "",
  options = [],
  validation
) {
  return {
    label,
    required,
    default: defaultValue,
    type: "select",
    options,
    validation,
  };
}
