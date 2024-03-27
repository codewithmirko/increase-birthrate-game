class Baby {
  constructor(gameScreen, playerLeft, playerTop) {
    this.width = 50;
    this.height = 50;
    this.gameScreen = gameScreen;
    this.left = playerLeft;
    this.top = playerTop;
    this.speed = 4;
    this.babyElement = document.createElement("img");
    this.babyElement.src = "img/test-baby.png";
    this.babyElement.style.position = "absolute";

    this.babyElement.style.width = `${this.width}px`;
    this.babyElement.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.babyElement);
    this.updatePosition();
  }

  updatePosition() {
    this.babyElement.style.left = `${this.left}px`;
    this.babyElement.style.top = `${this.top}px`;
  }

  checkCollisionWithHouse(house) {
    const babyRect = this.babyElement.getBoundingClientRect();
    const houseRect = house.houseElement.getBoundingClientRect();

    if (
      babyRect.left < houseRect.right &&
      babyRect.right > houseRect.left &&
      babyRect.top < houseRect.bottom &&
      babyRect.bottom > houseRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.top += this.speed;
    this.updatePosition();

    if (this.top > this.gameScreen.clientHeight) {
      game.removeBaby(this);
      return;
    }

    game.houses.forEach((house) => {
      if (this.checkCollisionWithHouse(house)) {
        console.log("Hit!");
      }
    });
  }
}
