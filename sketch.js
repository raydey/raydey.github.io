var x0 = 100;
var x1 = 200;
var x2 = 300;
var x3 = 400;

var y0 = 300;
var y1 = 300;
var y2 = 300;
var y3 = 300;

function setup()
{
	createCanvas(600, 500);
	smooth();
}

function draw()
{
	background(40, 40, 120);

	bezier(x0, y0, x1, y1, x2, y2, x3, y3);
}