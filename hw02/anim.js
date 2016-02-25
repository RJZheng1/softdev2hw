var canvas = document.getElementById("playground")
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

var r = 10;
var inc = true;
var requestID;

ctx.strokeRect(0, 0, canvas.width, canvas.height);

var logo = new Image();
logo.src = "logo_dvd.jpg";
var w = 120, h = 80;
var x = y = 200;
var up, right = true;

var circleSetup = function circleSetup(e){
    e.preventDefault();

    window.cancelAnimationFrame(requestID);
    
    var circle = function circle(){
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
    
	requestID = window.requestAnimationFrame(circle);
    };

    circle();
}

var dvdSetup = function dvdSetup(e){
    if(e instanceof Event){
	e.preventDefault();
    }

    window.cancelAnimationFrame(requestID);
    
    var dvd = function dvd(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(logo, x, y, w, h);
	
	if(x <= 0 || x >= canvas.width - w){
	    right = !right;
	}
	if(y <= 0 || y >= canvas.width - h){
	    up = !up;
	}
	
	if(right){
	    x += 1;
	}else{
	    x -= 1;
	}

	if(up){
	    y += 1;
	}else{
	    y -= 1;
	}
	    
	requestID = window.requestAnimationFrame(dvd);
    };

    dvd();
};

var stop = function stop(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
};

document.getElementById("circle").addEventListener("click", circleSetup);
document.getElementById("dvd").addEventListener("click", dvdSetup);
document.getElementById("stop").addEventListener("click", stop);
