export function createFieldInitialState(value = "", required = true) {
  return { value, required, error: "", touched: false };
}
export function isInvalid(...fieldStates) {
  return fieldStates.some((field) => {
    return (field.required && !field.value?.trim()) || field.error;
  });
}

export function createCustomEmptyValidator(message) {
  return function (value) {
    const trimmedValue = value.trim();
    if (!trimmedValue.length) return message;
    return "";
  };
}

export function createCustomMinLengthValidator(message, min) {
  return function (value) {
    const trimmedValue = value.trim();
    if (trimmedValue.length < min) return message;
    return "";
  };
}

export function createCustomMaxLengthValidator(message, max) {
  return function (value) {
    const trimmedValue = value.trim();
    if (trimmedValue.length > max) return message;
    return "";
  };
}

/**
 *
 * @param  {((value: string) => string)[]} validators
 */
export function createValidator(...validators) {
  return function (value) {
    const trimmedValue = value.trim();
    for (const validate of validators) {
      let message = validate(trimmedValue);
      if (message) return message;
    }
    return "";
  };
}
