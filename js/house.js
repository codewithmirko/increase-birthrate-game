class House {
  constructor(gameScreen) {
    this.width = 100;
    this.height = 150;
    this.speed = 2;
    this.gameScreen = gameScreen;
    this.left = gameScreen.clientWidth;
    this.top = gameScreen.clientHeight - this.height - 40;

    this.houseElement = document.createElement("img");

    this.houseElement.src = "img/test-house.png";
    this.houseElement.style.position = "absolute";
    this.houseElement.style.width = `${this.width}px`;
    this.houseElement.style.height = `${this.height}px`;
    this.houseElement.style.left = `${this.left}px`;
    this.houseElement.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.houseElement);
  }

  updatePosition() {
    this.houseElement.style.left = `${this.left}px`;
    this.houseElement.style.top = `${this.top}px`;
  }

  move() {
    this.left += -this.speed;
    this.updatePosition();
  }
}
