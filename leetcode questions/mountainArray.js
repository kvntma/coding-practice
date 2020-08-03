//Find max value;
//split array from peak point
//Make sure left is ascending
//make sure right is descending

const validMountainArray = (A) => {
  let peak = Math.max(...A);
  let indexOfPeak = A.indexOf(peak);
  const leftHalf = A.slice(A, indexOfPeak + 1);
  const rightHalf = A.slice(indexOfPeak);

  if (leftHalf.length == 0 || rightHalf.length == 0) {
    return false;
  }

  const checkAscend = (leftHalf) => {
    for (i = 0; i < leftHalf.length - 1; i++) {
      if (leftHalf[i] >= peak || leftHalf[i + 1] <= leftHalf[i]) {
        return false;
      }
    }
    return true;
  };

  const checkDescend = (secondHalf) => {
    for (i = 1; i < secondHalf.length; i++) {
      if (secondHalf[i] >= peak || secondHalf[i - 1] <= secondHalf[i]) {
        return false;
      }
    }
    return true;
  };

  return checkAscend(leftHalf) && checkDescend(rightHalf);
};
