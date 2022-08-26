export default function fixFiles(files) {
  const knownFiles = [];
  return files.map((element) => {
    if (knownFiles[element]) {
      knownFiles[element] = knownFiles[element] + 1;
      return element + '(' + (knownFiles[element] - 1) + ')';
    } else {
      knownFiles[element] = 1;
      return element;
    }
  });
}
