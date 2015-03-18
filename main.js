var main_canvas;

var circlesCenter = new Array();
var lights = ["red", "yellow", "green"];
var ligtWords = ["стоп", "внимание", "идти"];
var lightRadius;
var context;

window.onload = function() {
	main_canvas = document.getElementById("main_canvas");
	context = main_canvas.getContext("2d");
	main_canvas.addEventListener("click", checkClickedArea, false);
	drawLights();
};

function checkClickedArea(e) {
	var x = e.clientX;
	var y = e.clientY;       

	for(var i = 0; i < circlesCenter.length; i++) {
		var centerX = circlesCenter[i].x;
		var centerY = circlesCenter[i].y;
		if ( ( Math.pow( x - centerX, 2) + Math.pow(y - centerY, 2) ) < Math.pow(150 * 0.25, 2) ) {
			drawCircles();
			context.beginPath();
    		context.arc(centerX, centerY, lightRadius, 0, 2 * Math.PI, false);
    		context.fillStyle = lights[i];
    		context.fill();

    		context.fillStyle = "#00F";
		    context.strokeStyle = "#F00";
		    context.font = "12pt Helvetica";
		    context.fillText(ligtWords[i], centerX - lightRadius, centerY);
    	}	
	}
};

function drawCircles() {
	context.beginPath();

	var circleCenterX = 175;
	var circleCenterY = 100 + lightRadius + 20;
	circlesCenter[0]  = {
		x: circleCenterX,
		y: circleCenterY
	}
    context.arc(circleCenterX, circleCenterY, lightRadius, 0, 2 * Math.PI, false);
    context.fillStyle = '#600000';
    context.fill();

    context.beginPath();

    circleCenterY = 100 + lightRadius * 4;
    circlesCenter[1] = {
     	x: circleCenterX,
    	y: circleCenterY
    }
    context.arc(circleCenterX, circleCenterY, lightRadius, 0, 2 * Math.PI, false);
    context.fillStyle = '#FFFF99';
    context.fill();

    context.beginPath();

    circleCenterY = 100 + lightRadius * 6 + 20;
    circlesCenter[2] = {
    	x: circleCenterX,
    	y: circleCenterY
    }
    context.arc(circleCenterX, circleCenterY, lightRadius, 0, 2 * Math.PI, false);
    context.fillStyle = '#99FF99';
    context.fill();

}

function drawLights() {
	var helW = 150;
	var helH = 300;
	var helRectX = 100;
	var helRectY = 100;
	var helCenterX = helRectX + helW / 2;

	context.strokeRect(helRectX, helRectY, helW, helH);

	context.moveTo(helRectX, helRectY);
	context.lineTo(helCenterX, helRectY - 30);
	context.lineTo(helRectX + helW, helRectY);
	context.stroke();

	
	lightRadius = helW * 0.25;
	var circlePaddingY = 20;

	context.beginPath();

    drawCircles();

    context.strokeRect(helRectX + helW * 0.2, helRectY + helH, helW - helW * 0.4, 30);

    var lineStartX1 = helRectX + helW * 0.2 + 20;
    var lineStartY1 = helRectY + helH + 30;
    context.moveTo(lineStartX1, lineStartY1)
    context.lineTo(lineStartX1, lineStartY1 + 80);
    context.stroke();

    var lineStartX2 = lineStartX1 + helW - (helW * 0.2 + 20) *2;
    var lineStartY2 = lineStartY1;
    context.moveTo(lineStartX2, lineStartY2);
    context.lineTo(lineStartX2, lineStartY2 + 80);
    context.stroke();

    var visorW = 60;
    var visorH = 25;
    var visorLeft = helRectX - visorW;
    var visorTop = helRectY + 10;
    drawVisorLeft(context, visorLeft, visorTop, visorW, visorH);
    drawVisorLeft(context, visorLeft, visorTop + visorH + lightRadius * 2 + 10, visorW, visorH);
    drawVisorLeft(context, visorLeft, visorTop + visorH + lightRadius * 4 + 20, visorW, visorH);
    visorLeft += helW + visorW;
    drawVisorRight(context, visorLeft, visorTop, visorW, visorH);
    drawVisorRight(context, visorLeft, visorTop + visorH + lightRadius * 2 + 10, visorW, visorH);
    drawVisorRight(context, visorLeft, visorTop + visorH + lightRadius * 4 + 20, visorW, visorH);
};

function drawVisorLeft(context, left, top, width, height) {
	context.moveTo(left, top);
	context.lineTo(left + width, top);
	context.lineTo(left + width, top + height);
	context.lineTo(left, top);
	context.stroke();
};

function drawVisorRight(context, left, top, width, height) {
	context.moveTo(left, top);
	context.lineTo(left + width, top);
	context.lineTo(left, top + height);
	context.lineTo(left, top);
	context.stroke();
};
