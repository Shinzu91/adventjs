export default function checkSledJump(heights) {
  let previousValue = null;
  let isAscending = false;

  for (let i = 0; i < heights.length; ++i) {
    if (previousValue === null) {
      previousValue = heights[i];
      isAscending = true;
      continue;
    }

    if (isAscending && heights[i] > previousValue) {
      previousValue = heights[i];
      continue;
    }

    if (heights[i] <= previousValue && isAscending) {
      isAscending = false;
      previousValue = heights[i];
      continue;
    }

    if (!isAscending && heights[i] < previousValue) {
      previousValue = heights[i];
      continue;
    }

    if (!isAscending && heights[i] >= previousValue) {
      return false;
    }
  }

  if (isAscending) {
    return false;
  }

  return true;
}
