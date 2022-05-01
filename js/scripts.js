//Business Logic for Game

function Game(dice, activeTurn, holdTurn, player1Turn, player2Turn) {
  this.dice = dice;
  this.activeTurn = 0;
  this.holdTurn = holdTurn;
  this.player1Turn = player1Turn;
  this.player2Turn = player2Turn;
  this.currentPlayer;
  //this.currentTurn;  
}

Game.prototype.turn = function (boolean) {
  let check = boolean;
  if (check === true) {
    this.player1Turn = true;
    this.player2Turn = false;
    this.currentPlayer = this.player1Turn;
    //this.player1Turn.roll();
    console.log(this.currentPlayer);
  }
  else if (check === false) {
    this.player1Turn = false;
    this.player2Turn = true;
    this.currentPlayer = this.player2Turn;
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
    //this.player2Turn === false; //switch players
    this.turn(false);
  } else if (randomRoll !== 1) {
    this.activeTurn += randomRoll; //add roll to active turn total
    this.turn(true);   //don't switch players
  }
}

Game.prototype.hold = function () {
  Player.totalPoints += this.activeTurn;
  Player.activePlayer = false;
}




//Business Logic for Players
function Player(playerName, totalPoints, turnScore, activePlayer) {
  this.playerName = playerName;
  this.totalPoints = 0;
  this.turnScore = turnScore;
  this.activePlayer = false;
}



