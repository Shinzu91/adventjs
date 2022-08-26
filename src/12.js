const sortObstacles = (obstacles) => {
  return obstacles.sort((a, b) => {
    return a > b ? 1 : -1;
  });
};

const jump = (jumpNum, obstacles) => {
  const maxObstacle = Math.max(...obstacles);
  for (let index = 1; index <= maxObstacle; index++) {
    if (obstacles.includes(jumpNum * index)) {
      return false;
    }
  }

  return true;
};

export default function getMinJump(obstacles) {
  const sortedObstacles = sortObstacles(obstacles);
  const maxObstacle = Math.max(...obstacles);
  for (let i = 1; i <= maxObstacle; ++i) {
    if (jump(i, sortedObstacles)) {
      return i;
    }
  }
  return 0;
}
