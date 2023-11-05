/**
 *
 * @param {string} key
 * @param {(k: string) => string} convert
 */
export function formatKey(key) {
  const result = [];
  let start = 0,
    end = 1;
  let hasNext = true;
  while (end < key.length) {
    let charCode = key.charCodeAt(end);
    hasNext = true;
    if (charCode >= 65 && charCode <= 90) {
      //
      result.push(key.substring(start, end));
      start = end;
      hasNext = false;
    }
    end++;
  }
  if (hasNext) {
    result.push(key.substring(start, end));
  }
  result[0] = result[0].replace(key[0], key[0].toUpperCase());
  return result.join(" ");
}
