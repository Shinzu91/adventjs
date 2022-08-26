export default function countDecorations(bigTree) {
  if (bigTree === null) {
    return 0;
  }

  return countDecorations(bigTree.left) + countDecorations(bigTree.right) + bigTree.value;
}
