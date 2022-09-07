function Call_loop() { //this is a loop function
    var birthdays = "";
    month = 0;
    while (month < 7) { //"while states that if the statement writen after it is true, it will continue to the the funstion until it in false"
        birthdays += "<br>" + month; //<br> means that it will print each number on a lew line forming a list.
        month++;// ++ means that after the funcion is compleat it will add 1 onto the final number. 
    }
    document.getElementById("Loop").innerHTML = birthdays;
}

// String length will return the value of the total character number to make the string. 

function Stri_Method() {
    var sentance = "Hi there!"
    document.getElementById("Strings").innerHTML = sentance.length;
}

// "For loops" repeat a section of code a certain number of times. They are used when the number of iterations are known.

var Instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet", "Flute"]; // the brackets [] create an array or a colletion of objects that relate to one another in some way.
var content = "";
var Y;
//in an [array], the first item is given the postion(index) of 0. so it will print the instrument at index 0, 
//after that it will add one to the value which then will move up the array list to index one which is Drums. 
//It will continue to move up the list until all items in the array have been printed. hence Y< Instraments.length as the termanating condition. 

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instraments").innerHTML = content;
}

//Lets make an array for Cats.
function cat_pics() {
    var Cat_Pictures = []; //creating the array
    Cat_Pictures[0] = "sleeping"; // this object has the index of 0 with the value of "sleeping"
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = "Look at the cat! She is  " + Cat_Pictures[3] + ".";
}
//Constants written as "const", makes the variable id unchangable. This means you can not alter the id of horse_breeds in anyway. 
function constant_function() {
    const horse_breeds = { breed: "gypsy vanner", height: "16 hands", cost: "$5,000" }
    horse_breeds.color = "variety";
    horse_breeds.cost = "$40,000"
    document.getElementById("Constant").innerHTML = "A " + horse_breeds.breed + "  is a rare horse that can come in a  " + horse_breeds.color + " of colors.  It can grow to   " + horse_breeds.height + "  high, and costs up to " + horse_breeds.cost;
}
// This function is using both var and let to make variables, but not all can be accesed in the function at all times. 
function Variables() {
    var X = 24;
    document.write(X); {
        let X = 14;
        document.write("<br>" + X);//"let" has block scope meaning it can not be accessed outside of these curly brackets.  
    }
    document.write("<br>" + X);// This will change it back to 24 because it can not access the "let variable outside of its block and "var" can be accessed anywhere within or outside the function. 

}

//Returns stop a function and returns a value. 
function returnStatement() {
    var today = new Date();
    var Month = today.getMonth();
    var Day = today.getDate();
    var Year = today.getFullYear();
    var Result = Month + "/" + Day + "/" + Year;

    return document.getElementById("Returns").innerHTML = Result;
}

    //One way to do this is utilizing the return statement on an object and “this” keyword.
    function Objects() {
        let House = {
            style: "Cottage  ",
            siding: "log ",
            size: "1,760 sqft ",
            year: 1998,
            discription : function() { // Using "this you can get data from the ojects attributes"
                return " you should live in a " + this.siding + this.style + " that is " +  this.size + "and built in " + this.year;
            }   
        };
        document.getElementById("Houses").innerHTML = House.discription();
    }

    //The break statement "jumps out" of a loop. In this function the loop is set to go until December, but we will break it at September.
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    var text = ""
    var M;
    function Jump_Out() {
        for (M = 0; M < Months.length; M++) {
            if (M === 9) { break; } //this will stop the loop when the index reaches 6. 
            text += "The current Month is " + Months[M] + "<br>";
        }
        document.getElementById("Break").innerHTML = text;
    }

    // the Continue Statements can skip and iteration in a loop and then continue the loop until the termanationg condition is met. 
    function Continue_Loop() {
        let count=""
        var X;
        for (X=0; X<11; X++) {
            if (X===4) { continue; }// this will skip over the iteration at index 4 
            count += X + "<br>";
        }
        document.getElementById("Continue").innerHTML=count;
    }