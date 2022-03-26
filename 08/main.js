let sum = 0;
let avg = 0;
let count = 0;
while (true) {
  let num = +prompt("Enter your number");
  if (num === 0) {
    break;
  }
  sum += num;
  count++;
  avg = sum / count;
}
console.log(`sum: ${sum}`);
console.log(`avg: ${avg}`);
