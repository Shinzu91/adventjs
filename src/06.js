// First version using 2 fors and stopping on the first found element
export function sumPairsDoubleFor(numbers, result) {
  for (let i = 0; i < numbers.length; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      if (numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
}

// Second version using a foreach and a function with slice and find (I think it's not so optimized)
function findNumber(number, index, array, result) {
  const newArray = array.slice(index, array.length);
  if (newArray.length > 0) return newArray.find((element) => element + number === result);
}

export function sumPairsForEach(numbers, result) {
  const returnValue = [];

  numbers.forEach((number, index, currentArray) => {
    const foundNumber = findNumber(number, index + 1, currentArray, result);
    if (returnValue.length === 0 && foundNumber) {
      returnValue.push(number, foundNumber);
    }
  });

  return returnValue.length > 0 ? returnValue : null;
}

// Third version using Sets
export default function sumPairs(numbers, result) {
  const numbersSet = new Set(numbers);

  for (const number of numbersSet) {
    const searchNumber = result - number;

    if (searchNumber === number) {
      const isRepeated = numbers.filter((numberElement) => numberElement === searchNumber).length > 1;
      if (isRepeated) {
        return [searchNumber, number];
      }
    } else if (numbersSet.has(searchNumber)) {
      return [number, searchNumber];
    }
  }

  return null;
}
