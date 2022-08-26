const wrapper = '*';

const fillLineWrap = (n) => {
  let line = '';
  for (let i = 0; i < n; ++i) {
    line = line + wrapper;
  }

  return line;
};

export default function wrapGifts(gifts) {
  if (gifts.length === 0) {
    return [];
  }
  const result = [];
  const giftLength = gifts[0].length + 2;
  result.push(fillLineWrap(giftLength));
  gifts.forEach((gift) => {
    const line = `*${gift}*`;
    result.push(line);
  });
  result.push(fillLineWrap(giftLength));

  return result;
}
