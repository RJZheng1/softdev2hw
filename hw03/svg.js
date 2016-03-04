var pic = document.getElementById("vimage");

var intervalID;

var r = 10;
var grow = true;

var w = 120, h = 80;
var x = y = 200;
var up, right = true;

var setup = function setup(){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("id", "dot");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", 0);
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    var p = document.createElementNS("http://www.w3.org/2000/svg", "image");
    p.setAttribute("id", "pic");
    p.setAttribute("width", 0);
    p.setAttribute("height", 0);
    p.setAttributeNS("http://www.w3.org/1999/xlink", "href", "logo_dvd.jpg");
    p.setAttribute("x", x);
    p.setAttribute("y", y);
    pic.appendChild(p);
}();

var circle = function circle(e){
    e.preventDefault();

    window.clearInterval(intervalID);
    
    var p = document.getElementById("pic");
    p.setAttribute("width", 0);
    p.setAttribute("height", 0);

    var change = function change(e){
	c = document.getElementById("dot");
	c.setAttribute("r", r);
	
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

var dvd = function dvd(e){
    if(e instanceof Event){
	e.preventDefault();
    }

    window.clearInterval(intervalID);
    
    var c = document.getElementById("dot");
    c.setAttribute("r", 0);
    
    var p = document.getElementById("pic");
    p.setAttribute("width", w);
    p.setAttribute("height", h);

    var move = function move(){
	p = document.getElementById("pic");
	p.setAttribute("x", x);
	p.setAttribute("y", y);
	
	if(x <= 0 || x+w >= 500){
	    right = !right;
	}
	if(y <= 0 || y+h >= 500){
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
    };

    requestID = window.setInterval(move, 16);
};

var stop = function stop(e){
    e.preventDefault();
    window.clearInterval(intervalID);
};

document.getElementById("circle").addEventListener("click", circle);
document.getElementById("dvd").addEventListener("click", dvd);
document.getElementById("stop").addEventListener("click", stop);
