var canvas = document.getElementById("playground")
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

var r = 10;

ctx.strokeRect(0, 0, canvas.width, canvas.height);

var connect = function connect(e){
    e.preventDefault();

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, r, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
};

var clear = function clear(e){
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
};

document.getElementById("playground").addEventListener("click", connect);

document.getElementById("clear").addEventListener("click", clear);
