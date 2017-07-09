var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var speedValue = document.querySelector('.javascript-value');

// general settings
var middleX = canvas.width / 2;
var middleY = canvas.height - canvas.width / 30;
var radius = canvas.width / 2 - canvas.width / 10;

// beginning and ending of our arc. Sets by rad * pi
var startAngleIndex = 1;
var endAngleIndex = 2;

// zones settings
var zoneLineWidth = canvas.width / 5;
var counterClockwise = false;

// Center circle settings
var centerCircleRadius = canvas.width / 30;
var centerCircleColor = "#3e3d40";

// Arrow settings
var arrowValueIndex = 1.2;
var arrowColor = "#3e3d40";
var arrowWidth = canvas.width / 50;

// Digits settings
var digits = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180];
var digitsOffsetFromArc = canvas.width / 12;

var zonesCount = digits.length - 1;
var step = (endAngleIndex - startAngleIndex) / zonesCount;


var DrawZones = function() {
var YellowZonesCount = Math.ceil(zonesCount / 3);
var GreenZonesCount = Math.ceil(zonesCount / 3);
var BlueZonesCount = Math.ceil(zonesCount / 3);

var startAngle = startAngleIndex * Math.PI;
var endYellowAngle = (startAngleIndex + YellowZonesCount * step) * Math.PI;
var endGreenAngle = (startAngleIndex + (YellowZonesCount + GreenZonesCount) * step) * Math.PI;
var endBlueAngle = endAngleIndex * Math.PI;

var sectionOptions = [
	{
		startAngle: startAngle,
		endAngle: endYellowAngle - step/2,
		color: "#ffc815"
	},
	{
		startAngle: endYellowAngle,
		endAngle: endGreenAngle - step/2,
		color: "#a3cd3b"
	},
	{
		startAngle: endGreenAngle,
		endAngle: endBlueAngle,
		color: "#0093d7"
	}
];

this.DrawZone = function(options) {
	ctx.beginPath();
	ctx.arc(middleX, middleY, radius, options.startAngle, options.endAngle, counterClockwise);
	ctx.lineWidth = zoneLineWidth;
	ctx.strokeStyle = options.color;
	ctx.lineCap = "butt";
	ctx.stroke();
};

sectionOptions.forEach(function(options) {
	DrawZone(options);
});
};


var DrawArrow = function() {
	var arrowAngle = arrowValueIndex * Math.PI;
	var toX = middleX + (radius/1.5) * Math.cos(arrowAngle);
	var toY = middleY + (radius/1.5) * Math.sin(arrowAngle);
	ctx.beginPath();
	ctx.moveTo(middleX, middleY);
	ctx.lineTo(toX, toY);
	ctx.strokeStyle = arrowColor;
	ctx.lineWidth = arrowWidth;
	ctx.stroke();
};

var DrawCenterCircle = function() {
	ctx.beginPath();
	ctx.arc(middleX, middleY, centerCircleRadius, 0, 2 * Math.PI, false);
	ctx.fillStyle = centerCircleColor;
	ctx.fill();
};

DrawZones();
DrawArrow();
DrawCenterCircle();

speedValue.textContent = arrowValueIndex * 100 - 100;