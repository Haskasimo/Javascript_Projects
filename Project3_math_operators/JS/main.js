//These are all Math functions. 
function compute() {
    var subtraction = 25 - 15;//this funtion subtracts numbers. Put the numbers you want to subtract on this line.
    document.getElementById("math").innerHTML="25 - 15 ="+ subtraction;
}
function addition() {
    var addNumber = 5 + 34;//put the numbers you want to add on this line. 
    document.getElementById("Add").innerHTML = "5 + 34 ="+ addNumber; 
}
function Simple_Math() {
    var multiply = 25 * 9; //attach the numbers you want to multiply to a veriable
    document.getElementById("multiplication").innerHTML = "25 * 9 =" + multiply;
}

function Division() {
    var SimpleDivision = 245 / 5; //same with the previus funtions, attach equation to a variable.
    document.getElementById("divide").innerHTML = "245 / 5 =" + SimpleDivision;
}
function More_Math(){
    var Equa = (3 +10) * 8 / 3 - 4; //You can add multiple operators an make larger equations. 
    document.getElementById("equations").innerHTML = "three plus ten, multiplied by eight, devided by three, and subtracted be four equals.." + Equa;
}

function remainder() {
    var More_Math = 25%6; // if you want to find the remainder of a division equation you can put % instead of /.
    document.getElementById("modulus").innerHTML="when you devide 25 by 6 you have a remainder of:" + More_Math;
}
function math() {
    var x = 190; 
    document.getElementById("Negative").innerHTML= - x; //to change the varible to a negative, add - before the varible. 
}
function up() {
    var x=25.7;
    x++; //to increase an integer by 1 just add ++ after the variable. 
    document.getElementById("increase").innerHTML =x;
}
function down() {
    var Y=30;
    Y--; //same as the increase, you can decrease with -- after the varible. 
    document.getElementById("decrease").innerHTML= Y;
}
function choose() { 
    document.getElementById("random").innerHTML = Math.floor(Math.random()*50); //Math.floor= rounds down to the closest intager.
                                                                                // Math.random()*50 chooses a random number between 0 and 50. by changing 50 you can decide what range you want your choice to be. 

}
function MO() {
    document.getElementById("Object").innerHTML = Math.ceil(4.5);//Ceil is shor for ceiling, eaning that it will round up to the closest intager. 
}
