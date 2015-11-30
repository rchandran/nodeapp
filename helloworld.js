var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
console.log("hello, world!");

rl.question ("What is your name ? ", function (ans) {
  console.log("Hello " + ans + "!");
  rl.close();
  process.stdin.destroy();
});




