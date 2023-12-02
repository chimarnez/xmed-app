export function createFieldInitialState(value = "", required = true) {
  return { value, required, error: "", touched: false };
}
export function isInvalid(...fieldStates) {
  return fieldStates.some((field) => {
    return (field.required && !field.value?.trim()) || field.error;
  });
}
