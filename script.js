var color1 =document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body =document.getElementById("bg");
var h3 =document.querySelector(".getcolor");

function setBg(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    h3.textContent = "The Colors are " + color1.value + " and " + color2.value + ";";
}

color1.addEventListener("input" , setBg);
color2.addEventListener("input" , setBg); 
