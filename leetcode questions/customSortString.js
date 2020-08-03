// Loop through each letter in S
// if letter in T == S, move to the front in same index of the S
// return T

var customSortString = function (S, T) {
  let map = {},
    out = "",
    rest = [];
  // Init a LinkedHashMap of len S.length
  // i.e, Order is maintained
  S.split("").forEach((e) => {
    map[e] = 0;
  });
  // Count the occurances in T
  T.split("").forEach((e) => {
    if (map[e] >= 0) {
      map[e] = parseInt(map[e]) + 1;
    }
    // No order
    // Dummy string (to be appended to the end or anywhere)
    else rest.push(e);
  });

  // Generate the output, by  looping the map in order
  // and repeating the string/char based of its count
  Object.keys(map).forEach((e) => {
    out += e.repeat(map[e]);
  });
  // Dummy string was supposed to be sorted and then appended
  rest = rest.sort().join("");

  return out.concat(rest);
};
