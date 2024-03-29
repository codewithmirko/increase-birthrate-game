// Get all the button IDs

const startButton = document.getElementById("start-btn");
const tryAgainButton = document.getElementById("try-again-btn");
const instructionsButton = document.getElementById("instructions-btn");
const backInstructionsButton = document.getElementById("back-btn");
let game;

// Get all the audio IDs
const audioClick = document.getElementById("button-click-audio");
audioClick.volume = 0.4;
const audioFire = document.getElementById("fire-audio");
audioFire.volume = 0.4;
// const audioBabySad = document.getElementById("baby-sad-audio");
// audioBabySad.volume = 0.4;
// const audioBabyHappy = document.getElementById("baby-happy-audio");
// audioBabyHappy.volume = 0.4;
// const audioButtonHover = document.getElementById("button-hover-audio");
// audioButtonHover.volume = 0.4;
// const audioLostPoint = document.getElementById("lost-point-audio");
// audioLostPoint.volume = 0.4;
// const audioGameMusic = document.getElementById("game-music-audio");
// audioGameMusic.volume = 0.4;
// const audioGameOver = document.getElementById("game-over-music-audio");
// audioGameOver.volume = 0.4;

// Start and restart functions

function startGame() {
  console.log("start game");
  game = new Game();
  game.start();
}

function tryAgain() {
  game.restart();
  this.startGame();
}

// Handle all keyboard Inputs

startButton.addEventListener("click", function () {
  startGame();
  audioClick.play();
});

tryAgainButton.addEventListener("click", function () {
  tryAgain();
});

instructionsButton.addEventListener("click", function () {
  document.getElementById("game-intro").style.display = "none";
  document.getElementById("game-outro").style.display = "none";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("instructions").style.display = "block";
});

backInstructionsButton.addEventListener("click", function () {
  document.getElementById("game-intro").style.display = "flex";
  document.getElementById("game-outro").style.display = "none";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("instructions").style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyB") {
    game.spawnBaby();
    audioFire.play();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
    game.player.directionY = -2;
    console.log("test");
  }
  if (event.code === "KeyS") {
    game.player.directionY = 2;
  }
  if (event.code === "KeyA") {
    game.player.directionX = -2;
  }
  if (event.code === "KeyD") {
    game.player.directionX = 2;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "KeyW" || event.code === "KeyS") {
    game.player.directionY = 0;
  }
  if (event.code === "KeyA" || event.code === "KeyD") {
    game.player.directionX = 0;
  }
});
