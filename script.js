'use scrict';
const bodyVariable = document.getElementById('body');
const confirmButton = document.getElementById('button');

let roll = 0;
function rollAKittenPictureWidth() {
  roll = Math.random();
  let i = 0;
  for (let i = 0; i < 10; i++) {
    if (roll < 0.5 || roll > 0.8) {
      roll = Math.random();
    } else {
      roll *= 1000;
      roll = Math.floor(roll);
      console.log(`Width of kitten picture for this roll is ${roll}`);
      return roll;
    }
  }
}

function clickHasOccured() {
  bodyVariable.style.backgroundColor = '#164150';

  rollAKittenPictureWidth();
}

confirmButton.addEventListener('click', clickHasOccured);
