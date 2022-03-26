for (i = 1; i <= 100; i++) {
  if (i == 1) {
    continue;
  }
  let primeNumber = true;
  for (j = 2; j < i; j++) {
    //i % j == 0;  if i can devide by number is !prime
    if (i % j == 0) {
      primeNumber = false;
      break;
    }
  }
  if (primeNumber) console.log(i);
}
