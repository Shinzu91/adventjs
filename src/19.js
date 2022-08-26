export default function learn(time, courses) {
  const bestCombination = {
    position: [],
    sum: 0,
  };
  for (let i = 0; i < courses.length; ++i) {
    for (let j = i + 1; j < courses.length; ++j) {
      if (courses[i] + courses[j] === time) {
        return [i, j];
      }

      if (courses[i] + courses[j] < time && courses[i] + courses[j] > bestCombination.sum) {
        bestCombination.position = [i, j];
        bestCombination.sum = courses[i] + courses[j];
      }
    }
  }

  return bestCombination.sum > 0 ? bestCombination.position : null;
}
