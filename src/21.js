export default function canCarry(capacity, trip) {
  const result = [];
  trip.forEach((element) => {
    const [from, to] = element;
    for (let i = from; i < to; ++i) {
      result[i] = (result[i] || 0) + element[0];
    }
  });
  return result.every((element) => element <= capacity);
}
