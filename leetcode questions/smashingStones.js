var lastStoneWeight = function(stones) {
  stones = stones.sort((a, b) => a - b);
  let array2 = [];
  while (stones.length > 1) {
    let y = stones.pop();
    let x = stones.pop();
    let dif = y - x;
    if(dif > 0) {dsd
      array2.push(dif);
    }
    
}


let stones = [2,7,4,1,8,1]

console.log(lastStoneWeight(stones))