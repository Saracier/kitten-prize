'use scrict';
const bodyVariable = document.getElementById('body');
const confirmButton = document.getElementById('button');
const firstDiv = confirmButton.parentElement;

let countOfPictures = 0;
let roll = 0;
function rollAKittenPictureWidth(min, max) {
  roll = Math.random();
  // let i = 0;
  // for (let i = 0; i < 10; i++) {
  //   if (roll < 0.5 || roll > 0.8) {
  //     roll = Math.random();
  //   } else {
  //     roll *= 1000;
  //     roll = Math.floor(roll);
  //     console.log(`Width of kitten picture for this roll is ${roll}`);
  //     return roll;
  //   }
  // }
  roll = Math.floor(roll * (max - min) + min);
}

// let testowe = document.createElement('p');
// testowe.insertAdjacentElement('beforebegin', bodyVariable);
// testowe.innerHTML = `Hello there`;

function clickHasOccured() {
  rollAKittenPictureWidth(500, 800);
  if (countOfPictures == 0) {
    bodyVariable.style.backgroundColor = '#164150';
    const newBodyInsertion = document.createElement('section');
    newBodyInsertion.className = 'main';
    newBodyInsertion.innerHTML = `
  <h1>Congratulations!<h1>
  <h2>You won a kitten picture</h2>
  <img id="pictureKitten"src="http://placekitten.com/${roll}/500" alt="kitten picture" />
  <h3>One more?<h3> 
 `;
    confirmButton.insertAdjacentElement('beforebegin', newBodyInsertion);
    // newBodyInsertion.append(confirmButton);

    bodyVariable.style.display = 'flex';
    bodyVariable.style.justifyContent = 'center';
    bodyVariable.style.color = 'white';
    document.querySelector('h1').style.textAlign = 'center';
    document.querySelector('h2').style.textAlign = 'center';
    document.querySelector('h3').style.textAlign = 'center';
    document.querySelector('button').style.display = 'block';
    // document.querySelector('button').parentElement.style.textAlign = 'center';
    document.querySelector('button').style.margin = 'auto';
    // getElements.style.margin = 'auto';
    countOfPictures++;
  } else {
    let picture = document.getElementById('pictureKitten');
    picture.src = `http://placekitten.com/${roll}/500`;
  }
}

confirmButton.addEventListener('click', clickHasOccured);
