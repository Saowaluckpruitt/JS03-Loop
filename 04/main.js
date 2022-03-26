/*let sum = 0;
for (i = 0; i <= 100; i++) {
  console.log(`${i}:${(sum += i)}`);
}*/

let i = 0;
let sum = 0;
while (i++ < 100) {
  console.log(`${i}:${(sum += i)}`);
}
