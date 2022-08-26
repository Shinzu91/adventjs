const countPackagesFromCarrier = (carrierId, carriers) => {
  const carrier = carriers[carrierId];
  let sum = 0;
  carrier.subordinates.forEach((element) => {
    sum = sum + countPackagesFromCarrier(element, carriers);
  });

  return carrier.packages + sum;
};

export default function countPackages(carriers, carrierID) {
  const transformedArray = [];
  carriers.forEach((element) => {
    transformedArray[element[0]] = { packages: element[1], subordinates: element[2] };
  });

  return countPackagesFromCarrier(carrierID, transformedArray);
}
