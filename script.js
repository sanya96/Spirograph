var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
var R = "";
var r = "";
var d = "";
var speed = "";
var teta = 0;
var timer;

function paint()
	{

		var x = (R-r)*Math.cos(teta) + d*Math.cos( (R-r)*teta/r );
		var y = (R-r)*Math.sin(teta) - d*Math.sin( (R-r)*teta/r );
		
		teta = teta + 0.01;
		ctx.fillStyle="green";
		ctx.fillRect(300+x, 300+y, 1, 1);

		timer = setTimeout(paint, speed);
	
	}

function go()
	{

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		R = document.querySelector("#R").value;
		r = document.querySelector("#r1").value;
		d = document.querySelector("#d").value;
		speed =document.querySelector("#speed").value;

		paint();
	}


document.querySelector("#button").addEventListener("click", go);
document.querySelector("#button2").addEventListener("click", function(){clearInterval(timer)});
