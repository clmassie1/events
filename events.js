console.log('hello');

let pageTitle = document.getElementById("pageTitle");
let Introduction = document.getElementById("Introduction");
let outputTarget = document.getElementById("outputTarget");
let keypressInput = document.getElementById("keypressInput");


let makeLarge = document.getElementById("makeLarge");

let ColorButton = document.getElementById("HulkifyBtn");

document.getElementById("AddColor")
	.addEventListener("click", function(){
		ColorButton.classList.toggle("color")
});



let Hulkify = document.getElementById("HulkifyBtn");

document.getElementById("makeLarge")
	.addEventListener("click", function(){
		Hulkify.classList.toggle("MakeLarge");
	});
let addBorder = document.getElementById("HulkifyBtn")

document.getElementById("BorderBtn")
	.addEventListener("click", function() {
	addBorder.classList.toggle('borderColor')
});

let Rounding = document.getElementById("HulkifyBtn")

	document.getElementById("addRounding")
	.addEventListener("click", function(addRounding){
	Rounding.classList.toggle('roundingSides')
	
});

pageTitle.addEventListener("mouseover", function(onHeader) {
    console.log(onHeader.target);
    outputTarget.innerHTML = "You moved your mouse over the header";
});

pageTitle.addEventListener("mouseout", function(onHeader) {
    console.log(onHeader.target);
    outputTarget.innerHTML = "You left me!!";
});

Introduction.addEventListener("click", function (Introduction) {
	console.log('Introduction:', Introduction);
	outputTarget.innerHTML = "You clicked on the Introduction"
	
});

keypressInput.addEventListener("keyup", function(mirrorText) {
    console.log(mirrorText);
    outputTarget.innerHTML = keypressInput.value;
});












