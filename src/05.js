export default function daysToXmas(date) {
  const christmasDay = new Date('Dec 25, 2021');
  const differenceInTimestamp = christmasDay - date;
  return Math.ceil(differenceInTimestamp / 1000 / 60 / 60 / 24);
}
