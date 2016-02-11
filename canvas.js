var c = document.getElementById("ftb2maga");
var con = c.getContext("2d");

/*
con.fillStyle = "#ABCDEF";
con.fillRect(0, 0, 300, 300);

con.strokeStyle = "#ADD8E6"
con.strokeRect(100, 100, 400, 400);

con.beginPath();
con.moveTo(100, 400);
con.lineTo(100, 100);
con.moveTo(0,0);
con.stroke();
con.lineTo(350, 325);
con.lineTo(100, 400);
con.fill();
con.closePath();
*/

var x = 300
var y = 300;
var r = 50;

con.beginPath();
con.moveTo(x, y + r);
for(var theta = 0; theta < 2 * Math.PI; theta += Math.PI / 3){
    con.lineTo(x + r*Math.cos(theta), y + r*Math.sin(theta));
}
con.closePath();
con.fill();
