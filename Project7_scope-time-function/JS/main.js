//Assisgning a global variable and a loval variable.
var number = 21 //This is a global variable. is exsits outside the a function so that any function can accsess it. 

function Lets_Add() {
    var number2 = 30; //this is a local variable. it exsits only in this function and no other functions can accsess it. 
    document.getElementById("Addition").innerHTML = number + number2;
}

function More_Math() {
    var number3= 15;
    var errors = (number + number2 + number3);
    document.getElementById("Errors").innerHTML = errors;
    console.log(errors);
    
}
console.log("More");

// this function uses if / else logic with user input. 
function Your_Height() {
    var height =document.getElementById("Height").value;
    var message;

    //if users height is greater or equal to 120
    if (height >=120) {
       message = "You are tall enough to ride."; 
    }
    //if users input is shorter than 120cm
    else if (height < 120) {
        message = "You a NOT tall enough to ride.";
    }
    //if user tries to enter somthing other then a number
    else {
        message = "Can not read input. Please make sure height is in cm.";
    }
    document.getElementById("Tall_Enough").innerHTML=message;
}

//If and else function wusin the .gethours method. 
function Time_Function(){
    var Time =new Date().getHours(); //.gethours will get the current time in military time from the browser and assign that value to the variable "Time"
    var Reply;
        if(Time< 12 == Time> 0) {
            Reply = "Good Morning!";
        }
        else if (Time>= 12 == Time < 18) {
            Reply = "Good Afternoon";
        }
        else {
            Reply = "Good Evening!";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
}