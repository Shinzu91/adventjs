export default function countSheeps(sheeps) {
  const RED = 'rojo';
  return sheeps.filter(
    (sheep) => sheep.color === RED && sheep.name.toLowerCase().includes('n') && sheep.name.toLowerCase().includes('a'),
  );
}