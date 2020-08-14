// Loop through each letter in S
// if letter in T == S, move to the front in same index of the S
// return T

var customSortString = function (S, T) {
  let map = {},
    out = "",
    rest = [];
  // Init a LinkedHashMap of len S.length
  // i.e, Order is maintained
  // This is how you initialize a hashmap with values starting at 0
  S.split("").forEach((e) => {
    map[e] = 0;
  });
  // Count the occurances in T
  T.split("").forEach((e) => {
    if (map[e] >= 0) {
      map[e] = parseInt(map[e]) + 1;
    } // Compare value in T and if it's in the hashmap, add 1 more to it
    // No order
    // Dummy string (to be appended to the end or anywhere)
    else rest.push(e);
  });

  // Generate the output, by  looping the map in order
  // and repeating the string/char based of its count
  Object.keys(map).forEach((e) => {
    out += e.repeat(map[e]);
  }); // This is how you do a function X amount of times according to the value of the hashmap.
  // for Each key, do this X amount of times where x = map[element]
  // Dummy string was supposed to be sorted and then appended
  rest = rest.sort().join("");

  return out.concat(rest);
};
