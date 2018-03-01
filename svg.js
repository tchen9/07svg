var svg = document.getElementById("s");

var clear = document.getElementById("clear");

var first = true;
var px = -1;
var py = -1;

var drawCircle = function(e){
    var x = e.offsetX;
    var y = e.offsetX;
    
    if (first == true){
	px = x;
	py = y;
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 20);
	c.setAttribute("fill", "black");
	svg.appendChild(c);
	first = false;
    }
    
    else{
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", px);
	line.setAttribute("y1", py);
	line.setAttribute("x2", x);
	line.setAttribute("y2", y);
	line.setAttribute("stroke", "black");
	svg.appendChild(line);
	
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 20);
	svg.appendChild(c);

	px = x;
	py = y;
    }
}

svg.addEventListener("click", drawCircle);

var erase = function(){
    svg.innerHTML = "";
}

clear.addEventListener("click", erase);
