import { createValidator } from "./common";
import {
  EMPTY_FIELD,
  INVALID_BIRTH_DATE,
  MAX_50_LENGTH,
  MIN_3_LENGTH,
  email,
  password,
  phone,
} from "../constants/warnings";
import {
  validateMaxLength,
  validateMinLength,
  validateNotEmpty,
  validateNonMatch,
  validatePattern,
} from "./text";

export const validateEmail = createValidator(
  validateNotEmpty.bind(this, EMPTY_FIELD),
  validatePattern.bind(
    this,
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    email.INVALID_PATTERN
  )
);

export const validatePassword = createValidator(
  validateMinLength.bind(this, 8, password.MIN_LENGTH),
  validateNonMatch.bind(this, /\.*\s\.*/, password.EMPTY_SPACE),
  validatePattern.bind(
    this,
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    password.INVALID_PATTERN
  )
);

export const validateName = createValidator(
  validateNotEmpty.bind(this, EMPTY_FIELD),
  validateMinLength.bind(this, 3, MIN_3_LENGTH),
  validateMaxLength.bind(this, 50, MAX_50_LENGTH)
);

export const validatePhone = createValidator(
  validateNotEmpty.bind(this, EMPTY_FIELD),
  validateMinLength.bind(this, 7, phone.MIN_LENGTH),
  validateMaxLength.bind(this, 15, phone.INVALID_PATTERN),
  validatePattern.bind(
    this,
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/,
    phone.INVALID_PATTERN
  )
);

export const validateFilled = createValidator(
  validateNotEmpty.bind(this, EMPTY_FIELD)
);

export const validateBirthDate = createValidator(
  validateBirthDateNotInFuture.bind(this, INVALID_BIRTH_DATE)
);

function validateBirthDateNotInFuture(errorMessage, dateString) {
  const birthDate = new Date(dateString);
  const today = new Date();
  if (birthDate > today) {
    return errorMessage;
  }
  return '';
}
// export function validateEmail(value) {
//   let errorMessage = "Tu email debe ser válido";
//   const cleanValue = value.trim();
//   if (!cleanValue) return errorMessage;
//   if (!cleanValue.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) return errorMessage;
//   return "";
// }

// export function validatePassword(value) {
//   const cleanValue = value.trim();
//   if (!cleanValue || cleanValue.length < 8)
//     return "Debe tener al menos 8 caracteres";
//   if (cleanValue.match(/\.*\s\.*/)) return "No debe tener espacios vacíos";
//   if (
//     !cleanValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
//   ) {
//     return "Debe incluir mayúsculas, minúsculas y números";
//   }
//   return "";
// }
