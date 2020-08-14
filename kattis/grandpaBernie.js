const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineno = 0;
let tripsno = 0;
let trips = {};
rl.on("line", (line) => {
  lineno++;
  if (lineno == 1) {
    tripsno = parseInt(line) + 1;
    return;
  } else if (lineno <= tripsno) {
    let countryAndYear = line.split(" ");
    let [country, year] = [countryAndYear[0], countryAndYear[1]];
    if (trips[country] == undefined) {
      trips[country] = [year];
    } else {
      trips[country].push(year);
    }
  }
  if (lineno == tripsno) {
    for (let [key, value] of Object.entries(trips)) {
      value.sort((a, b) => a - b);
    }
  }
  if (lineno > tripsno + 1) {
    let query = line.split(" ");
    let countryQuery = query[0];
    let tripNumber = query[1];
    console.log(trips[countryQuery][tripNumber - 1]);
  }
});
