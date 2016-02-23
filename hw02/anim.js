var canvas = document.getElementById("playground")
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

var r = 10;
var inc = true;
var requestID;

ctx.strokeRect(0, 0, canvas.width, canvas.height);

var draw = function draw(e){
    if(e instanceof Event){
	e.preventDefault();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, r, 0, 2*Math.PI);
    ctx.fill();

    if(r <= 0 || r >= Math.min(canvas.width/2, canvas.height/2)){
	inc = !inc;
    }

    if(inc){
	r += 1;
    }else{
	r -= 1;
    }
    
    requestID = window.requestAnimationFrame(draw);
};

var stop = function stop(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
}

document.getElementById("start").addEventListener("click", draw);
document.getElementById("stop").addEventListener("click", stop);
