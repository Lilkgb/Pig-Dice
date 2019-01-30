function Player(name, score, totalScore) {
  this.name = name;
  this.score = score;
  this.totalScore = totalScore;
}


var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function getSum(total, num) {
  return total + num;
}



$(document).ready(function() {
  var totalP1 = [0];
  var totalP2 = [0];
  $("#nameForm").submit(function(event) {
    var player1Name = $("input#player1NameInput").val();
    var player2Name = $("input#player2NameInput").val();
    var player1 = new Player(player1Name, 0, 0);
    var player2 = new Player(player2Name, 0, 0);
    console.log(player1.totalScore);
    $(".player1Name").text(player1.name);
    $(".player1Score").text(player1.score);
    $(".player2Name").text(player2.name);
    $(".player2Score").text(player2.score);
    event.preventDefault();
    // player1.diceRoll = 55
    $("#nameForm").hide();
    $("#player1Turn").show();
    $(".scores").show("slow");
    $("#player1Dice").click(function() {
      var playerRoll = dice.roll();
      $("#playerOneRoll").text(playerRoll);
      if(playerRoll !==1) {
        player1.score += playerRoll;
        totalP1.push(playerRoll);
      }
      else {
        player1.score *= 0;
        alert("YOUR TURN IS OVER, YOU ROLLED A 1");
        totalP1 = [0];
        totalP2 = [0];
        $("#player2Turn").show();
        $("#player1Turn").hide();
        $("#playerTwoRoll").text(" ");
      }
      $(".player1Score").text(player1.totalScore);
    });

    $("#player2Dice").click(function() {
      var playerRoll = dice.roll();
      $("#playerTwoRoll").text(playerRoll);
      if(playerRoll !==1) {
        player2.score += playerRoll;
        totalP2.push(playerRoll);
        console.log(totalP2)
      }
      else {
        player2.score *= 0;
        alert("YOUR TURN IS OVER, YOU ROLLED A 1");
        totalP1 = [0];
        totalP2 = [0];
        $("#player2Turn").hide();
        $("#player1Turn").show();
        $("#playerOneRoll").text(" ");
      }

      $(".player2Score").text(player2.totalScore);
      })

      $(".turnChange").click(function() {
        player1.totalScore += totalP1.reduce(getSum);
        $(".player1Score").text(player1.totalScore);
        player2.totalScore += totalP2.reduce(getSum);
        $(".player2Score").text(player2.totalScore);
        $("#playerOneRoll").text(" ");
        $("#playerTwoRoll").text(" ");



        totalP1 = [0];
        totalP2 = [0];
        $("#player2Turn").toggle();
        $("#player1Turn").toggle();

        if (player1.totalScore >= 100) {
          alert("Player 1 Wins!")
        }
        else if (player2.totalScore >= 100) {
          alert("Player 2 Wins!")
        }
      });
    });
  });
