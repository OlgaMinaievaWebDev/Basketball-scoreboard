const displayHome = document.getElementById("home");
const displayGuest = document.getElementById("guest");

//home score
let score = 0;

function addOne() {
  score += 1;
  displayHome.textContent = score;
  highlightWinner();
  gameOver();
}

function addTwo() {
  score += 2;
  displayHome.textContent = score;
  highlightWinner();
  gameOver();
}

function addThree() {
  score += 3;
  displayHome.textContent = score;
  highlightWinner();
  gameOver();
}

//guest score
let scoreGuest = 0;

function addOneGuest() {
  scoreGuest += 1;
  displayGuest.textContent = scoreGuest;
  highlightWinner();
  gameOver();
}

function addTwoGuest() {
  scoreGuest += 2;
  displayGuest.textContent = scoreGuest;
  highlightWinner();
  gameOver();
}

function addThreeGuest() {
  scoreGuest += 3;
  displayGuest.textContent = scoreGuest;
  highlightWinner();
  gameOver();
}

//winner score highlights
function highlightWinner() {
  if (score > scoreGuest) {
    displayGuest.style.color = "#f94f6d";
    displayHome.style.color = "#C1F2B0";
  } else if (scoreGuest > score) {
    displayHome.style.color = "#f94f6d";
    displayGuest.style.color = "#C1F2B0";
  }
}

function gameOver() {
  if (score === 99 || scoreGuest === 99) {
    score = 0;
    scoreGuest = 0;
    displayGuest.textContent = 0;
    displayHome.textContent = 0;
  }
}
