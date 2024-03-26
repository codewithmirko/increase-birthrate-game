class Baby {
  constructor(gameScreen, playerLeft, playerTop) {
    this.width = 50;
    this.height = 50;
    this.gameScreen = gameScreen;
    this.left = playerLeft;
    this.top = playerTop;
    this.speed = 3;
    this.babyElement = document.createElement("img");
    this.babyElement.src = "img/test-baby.png";
    this.babyElement.style.position = "absolute";

    this.babyElement.style.width = `${this.width}px`;
    this.babyElement.style.height = `${this.height}px`;
    // this.babyElement.style.left = `${this.left}px`;
    // this.babyElement.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.babyElement);
    this.updatePosition();
  }

  move() {
    this.top += this.speed;
    this.updatePosition();
  }

  updatePosition() {
    this.babyElement.style.left = `${this.left}px`;
    this.babyElement.style.top = `${this.top}px`;
  }

  hitHouse(house) {
    console.log("Baby Element:", this.babyElement);
    console.log("House Element:", house.houseElement);
    const babyRect = this.babyElement.getBoundingClientRect();
    const houseRect = house.babyElement.getBoundingClientRect();

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
}
