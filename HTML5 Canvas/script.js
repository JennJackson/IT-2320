var Main = {};

Main.Canvas = document.getElementById('canvas');
Main.Context = Main.Canvas.getContext('2d');
Main.KittenImage = new Image();
Main.KittenImage.src = "kitten.png";
Main.Offset = 25;
Main.DragXOffset = 0;
Main.BiggestDifference = 0;
Main.ClosestImage;

Main.ImageCount = 7;
Main.SelectedImage = 3;


Main.ImageWidth = 250;
Main.Space = 25;

Main.SnappingXCoordinate = Main.Canvas.width/2 - Main.ImageWidth/2;

Main.Box = function(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.ImageWidth = w;
	this.Height = h;

	this.DrawAsImage = function(image)
	{
		Main.Context.drawImage(image, this.X, this.Y, this.ImageWidth, this.Height);
	}
}


Main.FindImageClosestToCenter = function()
{
	var smallestDifference = 999;
	var index = 0;
	
	for (var i=0; i < Main.Boxes.length; i++)
	{
		var difference = Main.SnappingXCoordinate - Main.GetXCoordinate(i);
		
		if(difference < 0) difference = difference * -1;
		
		if (difference < smallestDifference)
		{
			smallestDifference = difference;
			Main.SelectedImage = i;		
		}	
	}
}

Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

	Main.Boxes = [];
	
	for(var i = 0; i < Main.ImageCount; i++)
	{
		if(i != Main.SelectedImage)
		{
			Main.Boxes.push(new Main.Box(Main.GetXCoordinate(i), 100, Main.ImageWidth, Main.ImageWidth));
		}
	};
	
	var x = Main.GetXCoordinate(Main.SelectedImage) - Main.ImageWidth * .25;
	var y = 100 - Main.ImageWidth * .25;
	var width = Main.ImageWidth * 1.5;
	
	Main.Boxes.push(new Main.Box(x, y, width, width));
		
	for (var i=0; i<Main.Boxes.length; i++)
	{
		Main.Boxes[i].DrawAsImage(Main.KittenImage);
	}

	requestAnimFrame(function() { Main.Animate(); });
}

Main.GetXCoordinate = function(imageIndex)
{
	return Main.Offset + (Main.ImageWidth*imageIndex) + (Main.Space*imageIndex);
}

///////////////////////////

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	function OnMouseMove(e)
	{	
		if (Main.DragOk)
		{
			//Set the new offset by subtracting Main.DragXOffset from the current Mouse Location
			Main.Offset = getMouseX(e) - Main.DragXOffset;
		}
	}
	
	function OnMouseDown(e)
	{
		//Figure out where your cursor is relative to Main.Offset, and record the difference in Main.DragXOffset
		Main.DragXOffset = getMouseX(e) - Main.Offset;
		Main.DragOk = true;
		
	}
	
	function OnMouseUp()
	{			
		Main.DragOk = false;
		Main.FindImageClosestToCenter();
		Main.Offset -= Main.GetXCoordinate(Main.SelectedImage) - Main.SnappingXCoordinate;
	}
	
	function getMouseX(e)
	{
		if (e.touches === undefined)
		{
			return e.pageX - canvas.offsetLeft;				
		}
		return e.touches[0].pageX - canvas.offsetLeft;		
	}
	
	function getMouseY(e)
	{
		if (e.touches === undefined)
		{
			return e.pageY - canvas.offsetTop;
		}
		return e.touches[0].pageY - canvas.offsetTop;
	}
	
	Main.Canvas.addEventListener('mousedown', function(e) { e.preventDefault(); OnMouseDown(e); }, false);
	Main.Canvas.addEventListener('mouseup', function(e) { e.preventDefault(); OnMouseUp(e); }, false);
	Main.Canvas.addEventListener('mousemove',function(e) { OnMouseMove(e); }, false);
	
	Main.DragOk = false;
	Main.Animate();
	Main.Offset -= Main.GetXCoordinate(Main.SelectedImage) - Main.SnappingXCoordinate;
});