export default function groupBy(collection, it) {
  const results = {};

  collection.forEach((element) => {
    const res = typeof it === 'function' ? it(element) : element[it];
    results[res] = results[res] ? [...results[res], element] : [element];
  });
  return results;
}
