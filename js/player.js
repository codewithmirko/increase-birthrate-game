class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.birdElement = document.createElement("img");

    this.birdElement.src = imgSrc;
    this.birdElement.style.position = "absolute";
    this.birdElement.style.width = `${width}px`;
    this.birdElement.style.height = `${height}px`;
    this.birdElement.style.left = `${left}px`;
    this.birdElement.style.top = `${top}px`;

    this.gameScreen.appendChild(this.birdElement);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.left <= 0) {
      this.left = 0;
    }

    if (this.top <= 0) {
      this.top = 0;
    }

    if (this.left >= this.gameScreen.clientWidth - this.width) {
      this.left = this.gameScreen.clientWidth - this.width;
    }
    if (this.top >= this.gameScreen.clientHeight / 5) {
      this.top = this.gameScreen.clientHeight / 5;
    }
  }

  updatePosition() {
    this.birdElement.style.left = `${this.left}px`;
    this.birdElement.style.top = `${this.top}px`;
  }
}
