const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const read = async () => {
  rl.on("line", (line) => {
    console.log(line);
    rl.close();
  });
};

for (i = 0; i < 10; i++) {}
