//100000*2.5/100 =>2500 y1
//102500 *2.5/100 => 2562.5    y2
let balance = 100000;

for (i = 1; i <= 10; i++) {
  let interest = balance * 0.025;
  balance += interest;
  console.log(`${i}:${balance}`);
}
