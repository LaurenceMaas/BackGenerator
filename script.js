var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGradient = document.getElementById("random");

console.log(randomGradient);

randomGradient.addEventListener("click",setRandomgradient);


color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

color1.value = "#00ff00";
color2.value = "#ff0000";
css.textContent = body.style.background + ";";

function setGradient(){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";	
	css.textContent = body.style.background + ";";
}

function setRandomgradient(){
	var color1val = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var color2val = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = "linear-gradient(to right," + color1val + "," + color2val + ")";	
	css.textContent = body.style.background + ";";
	
}