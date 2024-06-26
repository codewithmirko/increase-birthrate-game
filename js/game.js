class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-outro");
    this.instructionsScreen = document.querySelector("#instructions");
    this.statsScreen = document.querySelector("#game-container");
    this.livesDisplay = document.querySelector("#lives-display");
    this.gameWonScreen = document.querySelector("#game-won");
    this.player = new Player(
      this.gameScreen,
      500,
      300,
      150,
      110,
      "img/gifmaker_me.gif"
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
    this.canTrigger = true;
    this.cooldownDuration = 500;
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.backgroundColor = `lightblue`;
    this.startScreen.style.display = "none";
    this.instructionsScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.statsScreen.style.display = "flex";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("gameLoop is working");
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
    this.currentFrame++;
  }

  restart() {
    this.gameIsOver = false;
    clearInterval(this.gameIntervalId);
    this.livesDisplay.style.display = "block";
    this.gameScreen.innerHTML = "";
    this.houses = [];
    this.babies = [];
    this.score = 0;
    this.lives = 3;
    document.getElementById("lives").innerText = this.lives;
    document.getElementById("score").innerText = this.score;
    this.houses.forEach((house) => {
      house.speed = 2;
    });
    this.gameWonScreen.style.display = "none";
    this.endScreen.style.display = "none";
  }

  // Update Positions and Collisions of Houses and Babys

  update() {
    this.player.move();
    this.player.updatePosition();

    if (this.currentFrame % 220 === 0) {
      this.spawnHouse();
    }

    this.houses.forEach((house) => {
      house.move();

      if (house.left + house.width < 0 && this.canTrigger) {
        this.houses.splice(this.houses.indexOf(house), 1);
        this.lives--;
        document.getElementById("lives").innerText = this.lives;
        audioLostPoint.play();
        this.canTrigger = false;
        setTimeout(() => {
          this.canTrigger = true;
        }, this.cooldownDuration);
      }
    });

    this.houses = this.houses.filter((house) => {
      return house.top < this.height;
    });

    this.babies.forEach((baby) => {
      baby.move();

      if (baby.top > this.height && this.canTrigger) {
        this.lives--;
        document.getElementById("lives").innerText = this.lives;
        audioBabySad.play();
        this.canTrigger = false;
        setTimeout(() => {
          this.canTrigger = true;
        }, this.cooldownDuration);
      }
    });

    this.babies.forEach((baby) => {
      this.houses.forEach((house) => {
        if (baby.checkCollisionWithHouse(house) && this.canTrigger) {
          this.houses.splice(this.houses.indexOf(house), 1);
          console.log("Hit!");
          this.removeBaby(baby);
          house.houseElement.classList.add("house-animation");
          this.score += 1;
          document.getElementById("score").innerText = this.score;
          audioBabyHappy.play();

          this.canTrigger = false;
          setTimeout(() => {
            this.canTrigger = true;
          }, this.cooldownDuration);
        }
      });
    });

    // Show Lose or Win Screen depending on Life/Score

    if (this.lives < 1) {
      this.gameIsOver = true;
      this.gameScreen.style.display = "none";
      this.instructionsScreen.style.display = "none";
      this.endScreen.style.display = "block";
      this.livesDisplay.style.display = "none";
      audioGameMusic.pause();
      audioGameMusic.currentTime = 0;
      audioGameOver.play();
    }

    if (this.score > 50) {
      this.gameIsOver = true;
      this.gameScreen.style.display = "none";
      this.instructionsScreen.style.display = "none";
      this.endScreen.style.display = "none";
      this.gameWonScreen.style.display = "block";
    }
  }

  // spawn Houses and Babys

  spawnHouse() {
    const newHouse = new House(this.gameScreen);
    this.houses.push(newHouse);

    if (this.score >= 5 && this.score < 10) {
      newHouse.speed += 1.5;
    }

    if (this.score >= 10 && this.score < 15) {
      newHouse.speed += 3.5;
    }

    if (this.score >= 15 && this.score < 30) {
      newHouse.speed += 5.5;
    }

    if (this.score > 30) {
      newHouse.speed += 6.5;
    }
  }

  spawnBaby() {
    const newBaby = new Baby(
      this.gameScreen,
      this.player.left + this.player.width / 3,
      this.player.top + this.player.height
    );
    this.babies.push(newBaby);
  }

  removeBaby(baby) {
    this.babies = this.babies.filter((currentBaby) => {
      return currentBaby !== baby;
    });

    baby.babyElement.remove();
  }
}
