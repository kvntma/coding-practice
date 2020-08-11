const twoSumLessThanK = (A, K) => {
  let closestSum = -1;

  A.sort((a, b) => a - b);

  let pointerStart = 0;
  let pointerEnd = A.length - 1;

  while (pointerStart < pointerEnd) {
    sum = A[pointerEnd] + A[pointerStart];
    if (sum == K - 1) {
      closestSum = sum;
      return closestSum;
    }

    if (sum > closestSum && sum < K) {
      closestSum = sum;
    }
    //if the sum that we get is larger than K, we know we need to make the rightPointer move left (sum smaller).
    //else, if the sum is less than K, we will slowly creep larger and see if the number is within constraints
    sum > K ? pointerEnd-- : pointerStart++;
  }
  return closestSum;
};
