/**
 *
 * @param {string} message
 * @param {string} value
 */
export function validateNotEmpty(message, value) {
  if (!value.length) return message;
  return "";
}

/**
 *
 * @param {number} min
 * @param {string} message
 * @param {string} value
 */
export function validateMinLength(min, message, value) {
  if (value.length < min) return message;
  return "";
}

/**
 *
 * @param {number} max
 * @param {string} message
 * @param {string} value
 */
export function validateMaxLength(max, message, value) {
  if (value.length > max) return message;
  return "";
}
/**
 *
 * @param {RegExp} pattern
 * @param {string} message
 * @param {string} value
 */
export function validatePattern(pattern, message, value) {
  if (!value.match(pattern)) return message;
  return "";
}
/**
 *
 * @param {RegExp} pattern
 * @param {string} message
 * @param {string} value
 */
export function validateNonMatch(pattern, message, value) {
  if (value.match(pattern)) return message;
  return "";
}
