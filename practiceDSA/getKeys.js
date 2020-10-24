const value = {
  2: 1,
  53: 2,
  56: 4,
  57: 9,
  61: 2,
  62: 16,
  63: 2,
  398: 24,
  400: 24,
};

const sortKeys = (hash, number) => {
  let keys = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  return keys.splice(0, number);
};

console.log(sortKeys(value, 3));

const highestValue = (hash) => {
  let maxHighest = 0;
  let highestValues = [];
  let keys = Object.keys(hash);
  for (let key of keys) {
    if (hash[key] > maxHighest) {
      highestValues = [key];
      maxHighest = hash[key];
    } else if (hash[key] === maxHighest) {
      highestValues.push(key);
    }
  }
  return highestValues;
};

console.log(highestValue(value));
