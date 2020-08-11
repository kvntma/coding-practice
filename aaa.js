// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const count = S.split("").filter((char) => char === "a").length;
  if (count % 3 != 0) {
    return 0;
  }
  let countSegment = 0;
  for (i = 0; i < S.length; i++) {
    if (S[i] == "a") {
      countSegment++;
      if (countSegment == count / 3) {
        var startPoint = i + 1;
        break;
      }
    }
  }

  let countB = 1;
  for (i = startPoint; i < S.length; i++) {
    if (S[i] == "b") {
      countB++;
    } else {
      break;
    }
  }

  //

  countSegment = 0;
  for (i = startPoint + countB + 1; i < S.length; i++) {
    if (S[i] == "a") {
      countSegment++;
      if (countSegment == count / 3) {
        startPoint = i;
        console.log(startPoint);
        break;
      }
    }
  }

  let countB2 = 1;
  for (i = startPoint; i < S.length; i++) {
    if (S[i] == "b") {
      countB2++;
    } else {
      break;
    }
  }

  console.log(countB);
  console.log(countB2);
  return countB2 * countB;
}
