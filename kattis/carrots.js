const prompt = require("prompt-sync")({ sigint: true });

const num = prompt().split(" ");
const b = parseInt(num[1]);
console.log(b);
