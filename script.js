'use strict';
const inputBox = document.querySelector('.guess');
const checkBox = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
const body = document.querySelector('body');

// Generating random value
let scoreNumber = 20;
let highscoreNumber = 0;
let isPlaying = true;

let randomValue = Math.trunc(Math.random() * 20 + 1);

const messagePrinter = function (text) {
  message.textContent = text;
};

const eventClick = function () {
  const inputedValue = Number(inputBox.value);
  if (isPlaying && inputedValue > 0) {
    if (inputedValue === randomValue) {
      messagePrinter('Correct Number 🎉');
      isPlaying = false;
      body.style.backgroundColor = 'rgb(96, 179, 71)';
      number.style.width = '30rem';
      if (highscoreNumber < scoreNumber) {
        highscoreNumber = scoreNumber;
        highscore.textContent = scoreNumber;
      }
      number.textContent = randomValue;
    } else if (inputedValue < randomValue) {
      messagePrinter('Very Low 📉');
      scoreNumber -= 1;
    } else if (inputedValue > randomValue) {
      messagePrinter('Very High 📈');
      scoreNumber -= 1;
    } else {
      scoreNumber -= 1;
    }
    score.textContent = scoreNumber;
    if (scoreNumber === 0) {
      isPlaying = false;
    }
  }
};
checkBox.addEventListener('click', eventClick);
again.addEventListener('click', function () {
  scoreNumber = 20;
  score.textContent = 20;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  inputBox.value = '';
  randomValue = Math.trunc(Math.random() * 20 + 1);
  isPlaying = true;
  number.textContent = '?';
});
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    eventClick();
  }
});
