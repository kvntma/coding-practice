/*
Create hash set
Add number to hashset, while also adding all the previous numbers in the hashset to the current number into a temp set.
Concact two sets at the end.

Repeat.

example -> 1, 4, 10:

ans
{1, 5, 4, 11, 15, 14, 10}

*/

let array = [1, 4, 10];

let permutations = new Set();
let set2 = new Set();

permutations.add(array[0]);

for (i = 1; i < array.length; i++) {
  permutations.forEach((number) => {
    set2.add(number + array[i]);
  });
  console.log(set2);
}
