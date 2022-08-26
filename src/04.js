const STAR = '*';
const SPACE = '_';
const EOL = '\n';
const END = '#';
const GROWTH_FACTOR = 2;

export default function createXmasTree(height) {
  let tree = '';
  tree = tree + createTree(height);
  return tree + createBase(height);
}

function createTree(height) {
  let result = '';

  for (let i = 1; i <= height; i++) {
    result = result + addCharacter(height - i, SPACE);
    result = result + addCharacter(i * GROWTH_FACTOR - 1, STAR);
    result = result + addCharacter(height - i, SPACE);
    result = result + EOL;
  }

  return result;
}

function createBase(height) {
  const baseSize = 2;
  let result = '';

  for (let m = 1; m <= baseSize; m++) {
    result = result + addCharacter((height * GROWTH_FACTOR - 1) / 2, SPACE);
    result = result + addCharacter(1, END);
    result = result + addCharacter((height * GROWTH_FACTOR - 1) / 2, SPACE);

    if (m !== baseSize) {
      result = result + EOL;
    }
  }
  return result;
}

function addCharacter(iterations, character) {
  let result = '';

  for (let k = 1; k <= iterations; k++) {
    result = result + character;
  }

  return result;
}
