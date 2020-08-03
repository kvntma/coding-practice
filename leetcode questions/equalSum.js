const canThreePartsEqualSum = (A) => {
  const sum = A.reduce((total, number) => total + number); //gets sum
  if (sum % 3) {
    return false; //if can't divide by 3 return false
  }

  // edge case;
  if (A.length <= 4 && sum == 0) {
    return false;
  }
  //
  const oneThird = sum / 3; //this is the value we want all 3 to have
  let p1 = 0; //slider 1
  let p2 = A.length - 1; //slider 2
  let [sum1, sum2, sum3] = [0, sum, 0]; //initialize partitions

  while (p2 > p1 && (sum1 !== oneThird || sum3 !== oneThird)) {
    //window slider
    if (sum1 !== oneThird) {
      sum2 -= A[p1];
      sum1 += A[p1];
      p1++;
    }
    if (sum3 !== oneThird) {
      sum2 -= A[p2];
      sum3 += A[p2];
      p2--;
    }
  }
  return sum2 === sum3 && sum1 === sum2; //if all 3 even return true
};

console.log(canThreePartsEqualSum([1, -1, 1, -1]));

/* Alt Solution - Get the sum/3 3 times in the array

*/
