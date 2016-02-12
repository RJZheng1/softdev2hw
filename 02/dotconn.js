var canvas = document.getElementById("playground")
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

var x = -1;
var y = -1;
var r = 10;
var rect = canvas.getBoundingClientRect();

ctx.strokeRect(0, 0, canvas.width, canvas.height);

var connect = function connect(e){
    ctx.beginPath();
    ctx.arc(e.pageX - rect.left, e.pageY - rect.top, r, 0, 2*Math.PI);
    ctx.fill();
    if(x != -1){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(e.pageX - rect.left, e.pageY - rect.top);
	ctx.stroke();
    }
    x = e.pageX - rect.left;
    y = e.pageY - rect.top;
};

var clear = function clear(e){
    e.preventDefault();
    x = -1;
    y = -1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
};

document.getElementById("playground").addEventListener("click", connect);

document.getElementById("clear").addEventListener("click", clear);
