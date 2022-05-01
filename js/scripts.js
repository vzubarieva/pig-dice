//Business Logic for Game

function Game(dice, holdTurn, player1, player2) {
  this.dice = dice;
  this.activeTurn = 0;
  this.holdTurn = holdTurn;
  this.player1 = 1;
  this.player2 = 2;
  this.currentPlayer = player1;
}

Game.prototype.turn = function (player) {
  let check = player;
  if (check === true) {
    this.player1 = true;
    this.player2 = false;
    this.currentPlayer = true;
    //this.player1Turn.roll();
    console.log(this.currentPlayer);
  }
  else if (check === false) {
    this.player1 = false;
    this.player2 = true;
    this.currentPlayer = false;
    //this.player2Turn.roll();
    console.log(this.currentPlayer);
  }
  //this.player1.roll();
  console.log(this.currentPlayer);
}

Game.prototype.roll = function () {
  const randomRoll = Math.floor(Math.random() * 6) + 1; // get a random number between 1 - 6
  console.log(randomRoll);
  if (randomRoll === 1) { //check if number is === 1
    this.activeTurn = 0; //change turn score to 0 
    console.log(this.activeTurn);
    this.turn(Player.activePlayer); //switch players
    this.hold(this.currentPlayer);
  } else if (randomRoll !== 1) {
    this.activeTurn += randomRoll; //add roll to active turn total
    this.turn(Player.activePlayer);
    console.log(this.activeTurn);  //don't switch players
  }
}

//Business Logic for Players
function Player(playerName, totalPoints, turnScore) {
  this.playerName = playerName;
  this.totalPoints = 0;
  this.turnScore = 0;
  this.activePlayer;
}
Game.prototype.hold = function () {
  if (this.currentPlayer === 1) {
    this.totalPoints += this.activeTurn;
    console.log(this.totalPoints);
    this.currentPlayer = this.player2;
    console.log(this.currentPlayer);
  } else if (this.currentPlayer === 2) {
    this.totalPoints += this.activeTurn;
    console.log(this.totalPoints);
    this.currentPlayer = this.player1;
    console.log(this.currentPlayer);
  }
}

