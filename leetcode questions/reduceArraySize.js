const minSetSize = (arr) => {
  let totalLength = arr.length;
  const halfArray = arr.length / 2;
  let counter = 0;
  let hmap = {};

  arr.map((number) => (hmap[number] = number in hmap ? hmap[number] + 1 : 1));
  let valuesSorted = Object.values(hmap).sort((a, b) => a - b);

  while (totalLength > halfArray) {
    let numberOfTimesPop = valuesSorted.pop();
    totalLength -= numberOfTimesPop;
    counter++;
  }
  return counter;
};
