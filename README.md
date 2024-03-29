# Stork Simulator: Increase the birthrate

[Click here to see deployed game](https://codewithmirko.github.io/increase-birthrate-game/)

## Description

"Stork Simulator: Increase the birthrate" is a 2D game in which players try to safe the economy by increasing the birthrate of a country. The players plays as a stork with the objective to safely drop as many babys as possible onto the houses of couples. If the player misses a house, he will lose one out of 3 lives. The game ends when the player succesfully "delivers" 50 babys.

## MVP

Stork moves freely and players can change altitude and direction by using WASD-keys.
By using the B-Key, the stork drops one baby.
A score is calculated based on the amount of safely dropped babys.
One out of three lives is lost, when a baby hits the ground.
One out of three lives is lost, when a houses reaches the left side of the screen without a baby.
When the player reaches zero lifes, the game is over.
When the player reaches 50 points the games is over.
The game difficulty increases as the game progresses. The houses move faster.

## Backlog

Player can choose 1 out of 3 Stork-Skins. (currently not implemented)
Every 10th baby is a special delivery with twins, that gives double points but loses 2 lives. (currently not implemented)
The player has a one time only action called Slow Motion (currently not implemented)

## Data structure

### Game Class (game.js)

start()
gameLoop()
restart()
update()
spawnHouse()
spawnBaby()
removeBaby()

### Player Class (player.js)

move()
updatePosition()

### House Class (house.js)

updatePosition()
move()

### Baby Class (baby.js)

updatePosition()
checkCollisionWithHouse(house)
move()

### Game Handling Functions: (script.js)

function startGame()
function tryAgain()

## States & States Transitions

Start Screen
Game Screen
Game Over Screen

## Task

- Set up basic HTML Structure
- create game and player class
- add House class
- add Baby class
- handle collisions and removing objects accordingly
- implement win/lose conditions
- implement restart function
- finalizing style with css/images/sounds

## Links

- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/codewithmirko/increase-birthrate-game)
- [Deployment Link](https://codewithmirko.github.io/increase-birthrate-game/)
