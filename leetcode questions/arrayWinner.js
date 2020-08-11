const getWinner = (arr, k) => {
  let winner = 0;

  let currentWins = 0;
  if (k == 1) {
    return Math.max(arr[0], arr[1]);
  }

  if (k >= arr.length || arr[0] == 99999) {
    return Math.max(...arr);
  }

  while (currentWins < k) {
    winner = Math.max(arr[0], arr[1]);
    if (winner == arr[0]) {
      currentWins++;
      arr.push(arr.splice(1, 1)[0]);
    } else {
      console.log(arr);
      arr.push(arr.shift());
      currentWins = 0;
      currentWins++;
    }
  }
  return winner;
};

console.log(getWinner(arr, k));
