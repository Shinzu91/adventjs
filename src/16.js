export default function decodeNumbers(symbols) {
  const MEANING_SYMBOL = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };
  let result = 0;

  for (let i = 0; i < symbols.length; ++i) {
    if (!MEANING_SYMBOL[symbols[i]]) {
      return NaN;
    }
    if (MEANING_SYMBOL[symbols[i]] >= (MEANING_SYMBOL[symbols[i + 1]] || 0)) {
      result = result + MEANING_SYMBOL[symbols[i]];
    }

    if (MEANING_SYMBOL[symbols[i]] < (MEANING_SYMBOL[symbols[i + 1]] || 0)) {
      result = result - MEANING_SYMBOL[symbols[i]];
    }
  }

  return result;
}
