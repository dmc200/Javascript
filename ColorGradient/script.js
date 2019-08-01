var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById('rand');



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function setGradientRandom() {
	var rand1 = Math.floor(Math.random() * 999999);
	var rand2 = Math.floor(Math.random() * 999999);
	body.style.background = "linear-gradient(to right," + "#" + rand1 + ", " + "#" + rand2 + ")";

	css.textContent = body.style.background + ";";}



setGradient();

randButton.addEventListener('click', setGradientRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);