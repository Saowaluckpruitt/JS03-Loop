let answer = 0;
while (answer < 1 || answer > 99) {
  answer = +prompt("Enter number 1  to 99");
}
let guess = 0;
let count = 0;
while (guess != answer) {
  count++;
  guess = +prompt("Guess what is the number");
  if (guess < answer) {
    alert("you number is too low try agian");
  } else if (guess > answer) {
    alert("your number too hight");
  } else {
    alert(`${answer} is correct: your try ${count} `);
  }
}
