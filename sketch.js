function setup()
{
	createCanvas(640, 480);
	smooth();
}

function draw()
{
	if(mouseIsPressed)
	{
		fill(0);
	}
	else
	{
		fill(255);
	}

	ellipse(mouseX, mouseY, 50, 50);
}