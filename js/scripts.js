function NewPlayer(name, score, diceRoll) {
  this.name = name;
  this.score = score;
  this.diceRoll = diceRoll;
}

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

NewPlayer.prototype.roll = function (){
  return dice;
}

var player1 = new NewPlayer();
var player2 = new NewPlayer();

$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    var player1Name = $("input#player1NameInput").val();
    var player2Name = $("input#player2NameInput").val();
    var player1 = new NewPlayer(player1Name, 0, dice.roll());
    var player2 = new NewPlayer(player2Name, 0, dice.roll());
    $(".player1Name").text(player1.name);
    $(".player1Score").text(player1.score);
    $(".player2Name").text(player2.name);
    $(".player2Score").text(player2.score);
    console.log(player1);
  })
  $("#player1Dice").click(function(event) {
    var diceRoll = dice.roll();

    $("#playerOneRoll").text(diceRoll);
    if (diceRoll !== 1) {
      console.log("ok cool");
    }
    else {
      console.log("SCREW YOU!")
    }
    // else if (diceRoll === 2) {
    //   console.log(2)
    // }
    // else if (diceRoll === 2) {
    //   console.log(2)
    // }
    // else if (diceRoll === 2) {
    //   console.log(2)
    // }
    // else if (diceRoll === 2) {
    //   console.log(2)
    // }
    // else if (diceRoll === 2) {
    //   console.log(2)
    // }
  });
});
