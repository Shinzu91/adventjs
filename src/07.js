const flattenObject = (object) => {
  const values = [];
  Object.values(object).forEach((element) => {
    if (typeof element === 'string') {
      values.push(element);
    } else {
      values.push(...flattenObject(element));
    }
  });
  return values;
};

export default function contains(store, product) {
  return flattenObject(store).includes(product);
}
