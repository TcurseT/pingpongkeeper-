const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const reset = document.querySelector("#reset");
const pointDropDown = document.querySelector("#dropDown");
const pOneScore = document.querySelector("#pOne");
const pTwoScore = document.querySelector("#pTwo");
const playTo = document.querySelector("#playTo");

let p1 = 0;
let p2 = 0;
let winningScore = 3;
let isGameOver = false;

playerOne.addEventListener("click", function () {
  if (!isGameOver) {
    p1 += 1;
    if (p1 === winningScore) {
      isGameOver = true;
      pOneScore.classList.add("winner");
      pTwoScore.classList.add("loser");
      playerOne.classList.add("gameOver");
      playerTwo.classList.add("gameOver");
    }
    pOneScore.textContent = p1;
  }
});

playerTwo.addEventListener("click", function () {
  if (!isGameOver) {
    p2 += 1;
    if (p2 === winningScore) {
      isGameOver = true;
      pTwoScore.classList.add("winner");
      pOneScore.classList.add("loser");
      playerOne.classList.add("gameOver");
      playerTwo.classList.add("gameOver");
    }
    pTwoScore.textContent = p2;
  }
});

// updating Playing To score
playTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  rSet();
});

// rSet function call-back
reset.addEventListener("click", rSet);

function rSet() {
  isGameOver = false;
  p1 = 0;
  p2 = 0;
  pTwoScore.textContent = 0;
  pOneScore.textContent = 0;
  pOneScore.classList.remove("winner", "loser");
  pTwoScore.classList.remove("winner", "loser");
  playerOne.classList.remove("gameOver");
  playerTwo.classList.remove("gameOver");
}
