var magicNum = [];
var wins = 0;
var losses = 0;
var numGoal = 53;
var total = 0;

var magic = {
  uniNum: function () {
    for (var i = 0; i < 4; i++) {
      magicNum.push(Math.floor(Math.random() * (12) + 1))
    }
  },
  guessNum: function () {
    //19-120
      numGoal = Math.floor(Math.random() * (120 - 19)) + 19
  },
  reset: function () {
    magicNum = []
    this.guessNum();
    this.uniNum()
    total = 0;
    $("#number-to-guess").text(numGoal);
    $('#player-score').text(total)
    $('#unicorn').empty()
    magicHappens()
    cheker()
    console.log(magicNum);
    console.log(numGoal)
  }
}

magic.uniNum()
magic.guessNum()
$("#number-to-guess").text(numGoal);
console.log(magicNum);
console.log(numGoal)


magicHappens()
cheker()

function magicHappens () {
  for (var i = 0; i < magicNum.length; i++) {

    var picUni = $("<img>");

    picUni.addClass("corni-image");

    
    picUni.attr("src", "./assets/images/backq.jpg")

    picUni.attr("data-unicornvalue", magicNum[i]);
    $("#unicorn").append(picUni);
  }
}


function cheker () {
$(".corni-image").on("click", function() {


  var unicornValue = ($(this).attr("data-unicornvalue"));
  unicornValue = parseInt(unicornValue);
  total += unicornValue;


  $('#player-score').text(total);

  if (total === numGoal) {
    wins++
    $('#wins').text(": " + wins)
    magic.reset()
  }

  else if (total >= numGoal) {
    losses++
    $('#losses').text(": " + losses)
    magic.reset()
  }

});
}
