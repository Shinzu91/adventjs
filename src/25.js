export default function canMouseEat(direction, game) {
  const DIRECTIONS = { up: [0, -1], down: [0, 1], right: [1, 0], left: [-1, 0] };
  const MOUSE_CHAR = 'm';
  const FOOD_CHAR = '*';
  const mouse = {};
  for (let i = 0; i < game.length; ++i) {
    for (let j = 0; j < game[i].length; ++j) {
      if (game[i][j] === MOUSE_CHAR) {
        mouse.h = i;
        mouse.v = j;
      }
    }
  }

  const [directionY, directionX] = DIRECTIONS[direction];
  return game[mouse.h + directionX]?.[mouse.v + directionY] === FOOD_CHAR;
}
