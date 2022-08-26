export default function isValid(letter) {
  const OPENING_CHAR = '(';
  const CLOSING_CHAR = ')';

  const hasWrongChars = letter.includes('[') || letter.includes(']') || letter.includes('{') || letter.includes('}');
  const hasEmpty = letter.includes('()');
  let result = 0;

  for (const char of letter) {
    if (result < 0) return false;
    if (char === OPENING_CHAR) ++result;
    if (char === CLOSING_CHAR) --result;
  }

  return !hasWrongChars && !hasEmpty && !result;
}
