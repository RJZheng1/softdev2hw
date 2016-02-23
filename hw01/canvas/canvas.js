var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

var x = 150;
var y = 150;
var r = 100;

ctx.fillStyle = "#CC0000";
ctx.strokeStyle = "#CC0000";

for(var theta = 0; theta <= 2 * Math.PI; theta += Math.PI / 12){
    //Starts a path. Erases old path.
    ctx.beginPath();
    /*
      Takes two parameters: x-coordinate, y-coordinate
      Moves the path to a certain coordinate without drawing a line
    */
    ctx.moveTo(x + r * Math.cos(theta), y + r * Math.sin(theta));
    for(var angle = theta; angle <= 2 * Math.PI + theta; angle += Math.PI / 3){
	/*
	  Takes two parameters: x-coordinate, y-coordinate
	  Moves the path to a certain point by drawing a line between the
	  current point and the new point
	*/
	ctx.lineTo(x + r*Math.cos(angle), y + r*Math.sin(angle));
    }
    //Draws a line from the current point to the starting point
    ctx.closePath();
    //Draws the path that you have created
    ctx.stroke();
}

ctx.strokeStyle = "#000000";

ctx.beginPath();
/*
  Takes five parameters: x-coordinate, y-coordinate, radius, start angle, end angle
  The x and y coordinates represent the center of the arc
  It will add an arc with the specified parameters to your path
*/
ctx.arc(x, y, r, 0, 2*Math.PI);
ctx.stroke();

r *= Math.sqrt(7/9);

ctx.beginPath();
ctx.arc(x, y, r, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x, y - r);
ctx.lineTo(x + r*Math.sqrt(3)/2, y - r/2);
ctx.lineTo(x + r*Math.sqrt(3)/2, y + r/2);
ctx.lineTo(x, y + r);
ctx.lineTo(x - r*Math.sqrt(3)/2, y + r/2);
ctx.lineTo(x - r*Math.sqrt(3)/2, y - r/2);
ctx.closePath();
//Fills in the shape enclosed by the path you created
ctx.fill();

ctx.fillStyle = "#000000"
ctx.font = "30px arial";
/*
  Takes 3 parameters: text, x-coordinate, y-coordinate
  Displays the text at the given coordinates
*/
ctx.fillText("Hello World!", 0, 30);
