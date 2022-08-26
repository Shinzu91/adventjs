export default function pangram(letter) {
  const letterClean = letter
    .toLowerCase()
    .replace(/[áä]/g, 'a')
    .replace(/[éë]/g, 'e')
    .replace(/[íï]/g, 'i')
    .replace(/[óö]/g, 'o')
    .replace(/[úü]/g, 'u');

  return 'abcdefghijklmnñopqrstuvwxyz'.split('').every((char) => letterClean.includes(char));
}
