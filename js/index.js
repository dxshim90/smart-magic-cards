const suit = 'hearts';
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonsWrapper = document.querySelector('.btn-wrapper')

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit,
    };
    cards.push(cardObject);
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 15;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

const createShuffleButton = () => {
  const shuffleButton = document.createElement('button')
  shuffleButton.setAttribute('id', 'shuffle-btn')
  shuffleButton.innerHTML = "Shuffle"
  shuffleButton.className = 'btn btn-lg btn-secondary'
  shuffleButton.style.margin = '1rem'
  buttonsWrapper.appendChild(shuffleButton)
}

const createShowHideButton = () => {
  const showHideButton = document.createElement('button')
  showHideButton.setAttribute('id', 'showhide-btn')
  showHideButton.innerHTML = "Show/Hide"
  showHideButton.className = 'btn btn-lg btn-secondary'
  showHideButton.style.margin = '1rem'
  buttonsWrapper.appendChild(showHideButton)
}

const createMagicButton = () => {
  const magicButton = document.createElement('button')
  magicButton.setAttribute('id', 'magicbtn')
  magicButton.innerHTML = "Magic"
  magicButton.className = 'btn btn-lg btn-secondary'
  magicButton.style.margin = '1rem'
  buttonsWrapper.appendChild(magicButton)
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  document.getElementById('start-game').remove()
  createShuffleButton()
  createShowHideButton()
  createMagicButton()
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
