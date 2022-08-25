function compute() {
    var subtraction = 25 - 15;
    document.getElementById("math").innerHTML="25 - 15 ="+ subtraction;
}
function addition() {
    var addNumber = 5 + 34;
    document.getElementById("Add").innerHTML = "5 + 34 ="+ addNumber; 
}
function Simple_Math() {
    var multiply = 25 * 9;
    document.getElementById("multiplication").innerHTML = "25 * 9 =" + multiply;
}

function Division() {
    var SimpleDivision = 245 / 5;
    document.getElementById("divide").innerHTML = "245 / 5 =" + SimpleDivision;
}
function More_Math(){
    var Equa = (3 +10) * 8 / 3 - 4;
    document.getElementById("equations").innerHTML = "three plus ten, multiplied by eight, devided by three, and subtracted be four equals.." + Equa;
}

function remainder() {
    var More_Math = 25%6;
    document.getElementById("modulus").innerHTML="when you devide 25 by 6 you have a remainder of:" + More_Math;
}
function math() {
    var x = 190;
    document.getElementById("Negative").innerHTML= - x;
}
function up() {
    var x=25.7;
    x++;
    document.getElementById("increase").innerHTML =x;
}
function down() {
    var Y=30;
    Y--;
    document.getElementById("decrease").innerHTML= Y;
}
function choose() {
    document.getElementById("random").innerHTML = Math.floor(Math.random()*50);

}
function MO() {
    document.getElementById("Object").innerHTML = Math.ceil(4.5);
}
