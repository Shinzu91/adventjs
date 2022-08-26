export default function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false;
  }

  const map1 = new Map();
  for (let i = 0; i < from.length; ++i) {
    if (
      ([...map1.values()].includes(from[i]) && map1.get(to[i]) !== from[i]) ||
      ([...map1.values()].includes(to[i]) && map1.get(from[i]) !== to[i])
    ) {
      return false;
    }

    map1.set(from[i], to[i]);
  }

  return true;
}
