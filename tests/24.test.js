import checkIsSameTree from '../src/24';

describe('Check if trees are the same', () => {
  test('The tree has same nodes and same value', () => {
    expect(checkIsSameTree(tree, tree)).toBeTruthy();
    expect(checkIsSameTree(tree2, tree2)).toBeTruthy();
  });

  test('The tree has different nodes', () => {
    expect(checkIsSameTree(tree2, tree)).toBeFalsy();
  });

  test('The tree has same nodes but with different values', () => {
    expect(checkIsSameTree(tree3, tree)).toBeFalsy();
  });
});

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

const tree3 = {
  value: 2,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};
