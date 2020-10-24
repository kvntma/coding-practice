

const depthSum = nestedList => {
  const dfs = (nestedList, depth) => {
    let sum = 0;
    console.log(nestedList)
    for (i = 0; i < nestedList.length; i++) {
      let current = nestedList[i];
      console.log(current)
      if (current.isInteger()) {
        sum += current * depth;
      } else {
        sum += dfs(current.getList(), depth + 1);
      }
    }
    return sum;
  }
  return dfs(nestedList, 1)
};

let nestedList = [4,1,1,2,[1,2]];

console.log(depthSum(nestedList));