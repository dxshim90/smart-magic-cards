const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonsWrapper = document.querySelector('.btn-wrapper');
let hideCards = false;

function createCardsArray() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit,
      };
      cards.push(cardObject);
    }
  });
  return cards;
}

// For each dataObject, create a new card and append it to the DOM
function appendCardsToDom(cards) {
  cards.forEach((card, i) => {
      let k = i
      setTimeout(function(){
        const positionFromLeft = i * 30;
        const cardElement = document.createElement('div');
        cardElement.setAttribute('data-value', card.value);
        cardElement.classList.add('card', `${card.suit}-${card.value}`);
        cardElement.style.left = `${positionFromLeft}px`;
        cardsWrapper.append(cardElement);
      }, 100 * (k + 1))
    })
}

// for(var i = 0;i < 5; i++){
//   let k = i;
//   setTimeout(function(){
//       console.log('count ', k);
//   }, 3000 * (k + 1));
// }


const shuffle = () => {
  while (cardsWrapper.firstChild) {
    cardsWrapper.removeChild(cardsWrapper.firstChild);
  }
  const cards = createCardsArray();
  const shuffledCards = cards.sort(() => 0.5 - Math.random());
  appendCardsToDom(shuffledCards);
};

const createShuffleButton = () => {
  const shuffleButton = document.createElement('button');
  shuffleButton.setAttribute('id', 'shuffle-btn');
  shuffleButton.innerHTML = 'Shuffle';
  shuffleButton.className = 'btn btn-lg btn-secondary';
  shuffleButton.style.margin = '1rem';
  buttonsWrapper.appendChild(shuffleButton);
  document.getElementById('shuffle-btn').addEventListener('click', shuffle);
};

const showHide = () => {
  hideCards = !hideCards;
  if (hideCards) {
    cardsWrapper.className = 'cards-wrapper hidden';
  } else {
    cardsWrapper.className = 'cards-wrapper';
  }
};

const createShowHideButton = () => {
  const showHideButton = document.createElement('button');
  showHideButton.setAttribute('id', 'showhide-btn');
  showHideButton.innerHTML = 'Show/Hide';
  showHideButton.className = 'btn btn-lg btn-secondary';
  showHideButton.style.margin = '1rem';
  buttonsWrapper.appendChild(showHideButton);
  document.getElementById('showhide-btn').addEventListener('click', showHide);
};

const magic = () => {
  while (cardsWrapper.firstChild) {

    cardsWrapper.removeChild(cardsWrapper.firstChild);
  }
  const cards = createCardsArray();
  appendCardsToDom(cards);
};

const createMagicButton = () => {
  const magicButton = document.createElement('button');
  magicButton.setAttribute('id', 'magicbtn');
  magicButton.innerHTML = 'Magic';
  magicButton.className = 'btn btn-lg btn-secondary';
  magicButton.style.margin = '1rem';
  buttonsWrapper.appendChild(magicButton);
  document.getElementById('magicbtn').addEventListener('click', magic);
};

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  document.getElementById('start-game').remove();
  createShuffleButton();
  createShowHideButton();
  createMagicButton();
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  const cards = createCardsArray();
  appendCardsToDom(cards);
}

document.getElementById('start-game').addEventListener('click', startGame);


