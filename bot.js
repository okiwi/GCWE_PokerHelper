var readline = require('readline');
require('./cards.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Current hand", function(answer) {
  console.log(answer);
  rl.close();
});