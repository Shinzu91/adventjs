export default function listGifts(letter) {
  const gifts = letter.split(' ');
  const result = {};

  gifts.forEach((element) => {
    if (element && element.indexOf('_')) {
      result[element] = (result[element] || 0) + 1;
    }
  });

  return result;
}
