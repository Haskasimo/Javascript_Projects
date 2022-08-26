//this function displays the type of data you are using
function dataType() {
    document.getElementById("type").innerHTML = (typeof "ten");
}
// isNaN checks to see if the data is a number or a string using boolian logic true and false statements
function NotNumber() {
    document.getElementById("IsNumber").innerHTML=isNaN("this is a string");
}

function NotString() {
    document.getElementById("IsString").innerHTML=isNaN(2023);
}
// If a number is non exsistant or cant be displayed then NAN (Not a Number) will be displayed.
function Shorthand() {
    document.getElementById("nonNumber").innerHTML= 0/0;
}
//If the number is far too large to calculate, then Infinity will be displayed.
function infin(){
    document.getElementById("BigNumber").innerHTML = 3E310; // this is a quick way to display a large number. This would be 3 to the 310th exponent. 
}
// you can also display infinity in negatives as well using a - before your number. 
function NegInfin() {
    document.getElementById("SmallNum").innerHTML = (-3E310);
}
// Boolian logic will return a true or False staement.
function BoolT() {
    document.getElementById("Bool1").innerHTML = (100>59);
}

function BoolF(){
    document.getElementById("Bool2").innerHTML = (45<13);
    
}
console.log(3 + 5); //if you need to display hidden information in the console you can do that with consol.log. 
console.log(12>40);

//This checks if both sets of data are equal to each other. 
function EQU() {
    document.getElementById("Equal").innerHTML = (10==10);
}

function NEQU() {
    document.getElementById("NotE").innerHTML = (5==10);
}
//the trible equal check weather or not the data and value match. It will only return True if moth data and value sets match. 
function TriET() {
    var True1= "July 29th",
    True2 = "July 29th";
    document.getElementById("TriE1").innerHTML = (True1===True2);
}

function TriEF() {
    var False1 = "not a match",
    False2 = 45;
    document.getElementById("TriE2").innerHTML=(False1===False2);

}
function TriEF2() {
    var False1 = "Not a match",
    False2 = "Not the same";
    document.getElementById("TriE3").innerHTML=(False1===False2);

}
function TriEF3() {
    var False1 = 20,
    False2 = "20";
    document.getElementById("TriE4").innerHTML=(False1===False2);

}
//Boolian Logic (AND,OR, And NOT)
function AND() { //And (&&) checks if both statments are true. Both must be correct to return true. 
    document.getElementById("BoolAND").innerHTML = "(8>3 and 20>2) = "+(8>3&& 20>2); // returns True
    
}
function AND2() {
    document.getElementById("BoolAND2").innerHTML = "(8>3 and 20<2) = "+(8>3&& 20<2);// returns False
}

function OR() { //OR checks if atleast one statement is true. If one is false and one is true, it will still return true. 
    document.getElementById("BoolOR").innerHTML = "(2>15 or 20>2) = "+ (2>15||20>2); // Returns true because 2>15 is false, but 20>2 is true
}

function OR2() {
    document.getElementById("BoolOR2").innerHTML = "(2>15 or 20<2) = "+(2>15||20<2);// returns false bacause both statements are false. 
}
//NOT checks if somthing is true or not. If the statement is False, then True will be returned. 
function NOTFUN() {
    document.getElementById("NOT").innerHTML = "15 > 5 = " + !(15 > 5);// 15 is greater than 5 which is true, s it will return a False. 
}
function NOTFUNF() {
    document.getElementById("NOTF").innerHTML = "34 < 8 = " + !(34 < 8);// 34 is less than 8 si false, so True will be returned. 
}