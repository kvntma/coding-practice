/*888. 
Fair Candy Swap

Add to List

Share
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

 

Example 1:

Input: A = [1,1], B = [2,2]
Output: [1,2]
Example 2:

Input: A = [1,2], B = [2,3]
Output: [1,2]
Example 3:

Input: A = [2], B = [1,3]
Output: [2,3]
Example 4:

Input: A = [1,2,5], B = [2,4]
Output: [5,4]

*/
// main problem --> Finding the arithmetic and implement it.
// sum of both arrays
// find average between the two --> the goal is to reach this average from both sides
// Create set B for instant lookup (hashmap)
// loop through Array A --> Remove i, and see if the array - i + X == average.
// find if X is in set B, check reverse algo --> If true, return X and A[i]

const A = [1, 2, 5];
const B = [2, 4];

const changeCandy = (alice, bob) => {
  const sum = (total, next) => total + next;
  let sumAlice = alice.reduce(sum);
  let sumBob = bob.reduce(sum);
  let setBob = new Set(bob);
  let average = (sumAlice + sumBob) / 2;

  for (i = 0; i < alice.length; i++) {
    currentNumber = alice[i];
    withoutNumber = sumAlice - currentNumber;
    numberToSwap = average - withoutNumber;
    if (
      setBob.has(numberToSwap) &&
      average == sumBob + currentNumber - numberToSwap
    ) {
      return [currentNumber, numberToSwap];
    }
  }
};

console.log(changeCandy(A, B));
