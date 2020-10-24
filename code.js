function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomCursor() {
  var input = document.getElementById("cursortext");

  var rnd = getRandomInt(input.value.length);

  input.focus();

  input.setSelectionRange(rnd, rnd);
}

function scoring() {
  var input = document.getElementById("cursortext").value;
  var score_e = (input.split("e").length - 1) * 100;
  var score_y = (input.split("y").length - 1) * 250;
  var score_s = (input.split("s").length - 1) * 150;

  document.getElementById("score").innerHTML = score_e + score_y + score_s;
}

var scoreID = window.setInterval(scoring, 1);
var intervalID = window.setInterval(randomCursor, 3000);
