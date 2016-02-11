var ctx = document.getElementById("playground").getContext("2d");

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

var x = -1;
var y = -1;
var r = 10;

var connect = function connect(e){
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, r, 0, 2*Math.PI);
    ctx.fill();
    if(x != -1){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();
    }
    x = e.clientX;
    y = e.clientY;
};

var clear = function clear(e){
    e.preventDefault();
    x = -1;
    y = -1;
    ctx.clearRect(0, 0, 400, 400);
};

document.getElementById("playground").addEventListener("click", connect);

document.getElementById("clear").addEventListener("click", clear);
