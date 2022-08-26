export default function checkIsSameTree(treeA, treeB) {
  if (!treeA && treeB) return false;
  if (treeA && !treeB) return false;
  if (!treeA && !treeB) return true;
  if (treeA.value !== treeB.value) return false;

  return checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right);
}
