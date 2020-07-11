const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let time1;
let time2;
let lineno = 0;

rl.on("line", (line) => {
  lineno++;
  if (lineno == 1) {
    time1 = new Date("July 4, 2020 " + line);
    return;
  }
  time2 = new Date("July 4, 2020 " + line);
  let diff = time2 - time1;
  if (diff < 0) {
    time2.setHours(time2.getHours() + 24);
    diff = time2 - time1;
  }
  if (diff == 0) {
    console.log("24:00:00");
    return;
  }

  diff = diff / 1000;

  ss = diff % 60;
  if (ss < 10) {
    ss = "0" + ss;
  }

  diff = (diff - ss) / 60;
  mm = diff % 60;
  if (mm < 10) {
    mm = "0" + mm;
  }

  diff = (diff - mm) / 60;
  hh = diff % 24;
  if (hh < 10) {
    hh = "0" + hh;
  }

  console.log(hh + ":" + mm + ":" + ss);
  rl.close();
});
