class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-outro");
    this.player = new Player(
      this.gameScreen,
      500,
      300,
      150,
      110,
      "img/test-birdy.png"
    );
    this.height = 700;
    this.width = 1150;
    this.houses = [];
    this.babies = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = 1000 / 60;
    this.currentFrame = 0;
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.backgroundColor = `lightblue`;

    this.startScreen.style.display = "none";

    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    console.log("i am the game loop function");
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
    this.currentFrame++;
  }

  update() {
    this.player.move();
    this.player.updatePosition();

    if (this.currentFrame % 100 === 0) {
      this.spawnHouse();
    }

    this.houses.forEach((house) => {
      house.move();
    });

    this.houses = this.houses.filter((house) => {
      return house.top < this.height;
    });

    this.babies.forEach((baby) => {
      baby.move();
    });
  }

  spawnHouse() {
    const newHouse = new House(this.gameScreen);
    this.houses.push(newHouse);
  }

  spawnBaby() {
    const newBaby = new Baby(
      this.gameScreen,
      this.player.left,
      this.player.top
    );
    this.babies.push(newBaby);
  }
}
