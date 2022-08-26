export default function missingReindeer(ids) {
  const set = new Set(ids);
  let i;
  for (i = 0; i < ids.length; ++i) {
    if (!set.has(i)) {
      return i;
    }
  }
  return i;
}
