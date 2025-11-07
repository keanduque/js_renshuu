let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
// rock: &#x270A; paper: &#x270B; scissors: &#x270C;
let emojiIcon = "";
let scoreEl = document.querySelector(".js-score");
updateScoreEl();
const resultEl = document.querySelector(".js-result");
const movesEl = document.querySelector(".js-moves");

function pickComputerMove() {
  const ranNum = Math.floor(Math.random() * 3) + 1;
  let computerMove = "";
  if (ranNum === 1) {
    computerMove = "rock";
  } else if (ranNum === 2) {
    computerMove = "paper";
  } else if (ranNum === 3) {
    computerMove = "scissors";
  }
  convertToEmoji(computerMove);
  return computerMove;
}
function getResult(userSelection, computerMove) {
  let result = "";

  if (userSelection === computerMove) {
    result = "Tie.";
    score.ties += 1;
  } else if (
    (userSelection === "rock" && computerMove === "scissors") ||
    (userSelection === "paper" && computerMove === "rock") ||
    (userSelection === "scissors" && computerMove === "paper")
  ) {
    result = "You win.";
    score.wins += 1;
  } else {
    result = "You lose.";
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  return result;
}

let autoPlayIntervalId;
let isAutoPlay = false;
let autoPlayBtnEl = document.querySelector(".auto-play-btn");
function autoPlay() {
  let afkMove = pickComputerMove();
  if (!isAutoPlay) {
    autoPlayIntervalId = setInterval(function () {
      playGame(afkMove);
      autoPlayBtnEl.textContent = "Stop Play";
      autoPlayBtnEl.style = "background-color:red";
    }, 500);
    isAutoPlay = true;
  } else {
    stopAutoPlay();
  }
}

function stopAutoPlay() {
  isAutoPlay = false;
  if (!isAutoPlay) {
    clearInterval(autoPlayIntervalId);
    autoPlayBtnEl.textContent = "Auto Play";
    autoPlayBtnEl.style = "background-color:green";
    resultEl.textContent = "";
    movesEl.textContent = "";
  }
}

function playGame(userSelection) {
  const computerMove = pickComputerMove();
  const computerEmoji = convertToEmoji(computerMove);
  const userEmoji = convertToEmoji(userSelection);
  const result = getResult(userSelection, computerMove);

  resultEl.textContent = result;
  movesEl.innerHTML = `You <span class="move-icon">${userEmoji}</span> VS  <span class="move-icon">${computerEmoji}</span> Computer`;
  updateScoreEl();
}

function convertToEmoji(choices) {
  if (choices === "rock") {
    emojiIcon = "&#x270A;";
  } else if (choices === "paper") {
    emojiIcon = "&#x270B;";
  } else if (choices === "scissors") {
    emojiIcon = "&#x270C;";
  }

  return emojiIcon;
}

function resetScore() {
  const resetEl = document.querySelector(".js-reset");
  let isScoreEmpty = Object.entries(score).every((s) => s[1] <= 0);
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreEl();
  resultEl.textContent = "";
  movesEl.textContent = "";

  if (!isScoreEmpty) {
    resetEl.textContent = "Score reset.";
    setTimeout(() => (resetEl.textContent = ""), 1000);
  }
}

function updateScoreEl() {
  scoreEl.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
