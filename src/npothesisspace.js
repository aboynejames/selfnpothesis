/**
* SelfGraphics - npothesis component
*
*  visualisation of Npothesis map/space 
* @class selfNpothesisSpace
*
* @package    Self Graphics - open sport project
* @copyright  Copyright (c) 2014 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var selfNpothesisSpace = function() {

	this.context = {};
	this.selfSpace = document.getElementById("map-npothesis-canvas");
	this.startNpothesisSpace();
	this.drawOval();
	
};

/**
* sets base canvas visualisation
* @method startCanvasSpace	
*
*/	
selfNpothesisSpace.prototype.startNpothesisSpace = function() {

	this.context = this.selfSpace.getContext("2d");
	this.context.fillStyle = '#EEEEEE';
	this.context.fillRect(0, 0, this.selfSpace.width, this.selfSpace.height);
	this.context.strokeStyle = '#000000';
	this.context.strokeRect(1,  1, this.selfSpace.width-2, this.selfSpace.height-2);
	
};

/**
* draws 2d oval space
* @method drawOval	
*
*/	
selfNpothesisSpace.prototype.drawOval = function() {

	var centerX = 80;
	var centerY = 440;
	var radius = 100;
	this.context.rotate(Math.PI/-4);
	this.context.scale(2, 1);

	// draw circle which will be stretched into an oval
	this.context.beginPath();
	this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	this.context.closePath();

	// apply styling
	this.context.fillStyle = 'blue';
	this.context.fill();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.stroke();	
	this.context.scale(0.5, 1);
	
};