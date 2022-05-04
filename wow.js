var canvas = document.getElementById("plzwork");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;
var z = x + 500;
var a = y + 500;

function Square() {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 10, 100, 100);

  ctx.fillStyle = "orange";
  ctx.fillRect(0, y, 100, 100);

  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, 100, 100);

  ctx.fillStyle = "green";
  ctx.fillRect(300, y, 100, 100);

  ctx.fillStyle = "red";
  ctx.fillRect(x, 300, 100, 100);
}

function drawing() {
  ctx.clearRect(0, 0, canvas.width, canvas.clientHeight);
  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawing, 10);
