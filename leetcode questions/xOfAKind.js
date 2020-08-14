const hasGroupsSizeX = (deck) => {
  function gcd_rec(a, b) {
    if (b) {
      return gcd_rec(b, a % b);
    } else {
      return Math.abs(a);
    }
  }

  let hmap = {};
  deck.map((x) => (hmap[x] = x in hmap ? hmap[x] + 1 : 1));
  const deckCheck = Object.values(hmap);
  let gcd = deckCheck.reduce((a, b) => gcd_rec(a, b));
  if (gcd >= 2) {
    return true;
  }
  return false;
};

let deck = [1, 1, 2, 2, 3, 3, 5, 6, 4, 4, 4, 3, 2, 1];

console.log(hasGroupsSizeX(deck));
