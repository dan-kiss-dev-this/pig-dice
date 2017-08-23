
function Player(name) {
  this.name = name;
  this.totalRoll = 0;
};

Player.prototype.score = function(roll) {
  if (roll === 1) {
    this.totalRoll = 0;
    alert('Next Player Turn...');
    $('.p1,.p2').toggle();
  } else {
    this.totalRoll = this.totalRoll + roll;
  }
};

var player1 = new Player('Player One');
var player2 = new Player('Player Two');
var currentScore1 = 0;
var currentScore2 = 0;

// logic for user interface
$(document).ready(function(){
  $("#totalScore1").text(0);
  $("#totalScore2").text(0);
  $('#p1Form').submit(function(event) {
    event.preventDefault();
    var diceRoll1 = Math.floor(Math.random() * (7 - 1) + 1);
    player1.score(diceRoll1);
    $('#currentRoll1').text(diceRoll1);
    $('#currentTotal1').text(player1.totalRoll);
  });

  $('#hold1').click(function() {
    currentScore1 += player1.totalRoll;
    if (currentScore1 >= 10) {
      $('.playerOneWins').show();
      $('.p1').hide();
      $('.playerScores').hide();
    } else {
      $("#totalScore1").text(currentScore1);
      player1.totalRoll = 0;
      $('#currentRoll1').text(0);
      $('#currentTotal1').text(0);
      $('.p1,.p2').toggle();
    }
  });

  $('#p2Form').submit(function(event) {
    event.preventDefault();
    var diceRoll2 = Math.floor(Math.random() * (7 - 1) + 1);
    player2.score(diceRoll2);
    $('#currentRoll2').text(diceRoll2);
    $('#currentTotal2').text(player2.totalRoll);
  });

  $('#hold2').click(function() {
    currentScore2 += player2.totalRoll;
    if (currentScore2 >= 10) {
      $('.playerTwoWins').show();
      $('.p2').hide();
      $('.playerScores').hide();
    } else {
      $("#totalScore2").text(currentScore2);
      player2.totalRoll = 0;
      $('#currentRoll2').text(0);
      $('#currentTotal2').text(0);
      $('.p1,.p2').toggle();
    }
  });

  $('.playAgain').click(function(event) {
    location.href = location.href;
  });
});