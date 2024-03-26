const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");

function startGame() {
  console.log("start game");
  game = new Game();
  game.start();
}

startButton.addEventListener("click", function () {
  startGame();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    game.spawnBaby();
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
