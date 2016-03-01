var pic = document.getElementById("vimage");

var r = 10;
var intervalID;
var grow = true;

var drawDot = function drawDot(){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("id", "circle");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", r);
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}();

var start = function start(e){
    e.preventDefault();

    window.clearInterval(intervalID);
    
    var change = function change(e){
	c = document.getElementById("circle");
	c.setAttribute("r", r.toString());
	
	if(r <= 0 || r >= 250){
	    grow = !grow;
	}

	if(grow){
	    r++;
	}else{
	    r--;
	}
    };

    intervalID = window.setInterval(change, 16);
};

var stop = function stop(e){
    e.preventDefault();
    window.clearInterval(intervalID);
};

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
