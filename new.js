let messageEl = document.getElementById("Message");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [];

function randomNumber() {
  let ranNum = Math.floor(Math.random() * 13 + 1);
  if (ranNum === 1) {
    return 11;
  } else if (ranNum > 10) {
    return 11;
  } else {
    return ranNum;
  }
}

function startGame() {
  isAlive = true;
  let firstcard = randomNumber();
  let secondcard = randomNumber();
  cards = [firstcard, secondcard];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards:  ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "If you want to draw a new card!";
  } else if (sum === 21) {
    message = " Whoooo ! You got a blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  sumEl.textContent = "Sum:  " + sum;
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let thirdCard = randomNumber();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  } else if (hasBlackJack === true) {
    alert(" You have already won the game ! Start a new one");
    hasBlackJack = false;
  } else {
    alert("Sorry ! You are out of the game");
  }
}
