function full_sentance() { // puts several seperate strings together
    var line_1 = "You step into the road,  ";
    var line_2= "and if you don’t keep your feet,  ";
    var line_3= "there is no knowing where  ";
    var line_4= "you might be swept off to.";
    var Whole_Sentance=line_1.concat(line_2,line_3, line_4);//.concat will add whatever variable you included in the parenthesis onto the preceding variable. 
    document.getElementById("Concatenate").innerHTML = Whole_Sentance + "   - J.R.R Tolkien.";
}

function Slice_Method() { // slices out a wprd in the charater paramaters and prints it in a new string.
    var Sentance = "Not all who wander are lost."
    var Section = Sentance.slice(12,18);// the numbers 12, and 18 are the character number in the string. this means it will slice out the characters starting from the 12th character in the string to the 18th character in the strng. Remeber spaces still count as characters. 
    document.getElementById("slice").innerHTML = Section;
}

function Uppercase_Method() {// changes a string to all uppercase letters
    var text = "run you fools!";
    var uppercase = text.toUpperCase();
    document.getElementById("Uppercase").innerHTML = uppercase;
}

function Search_Method() {// searvhes for a specified word in a string, and gives its position in the string.
    var text = "The Quest stands upon the edge of a knife";
    var find = text.search("Quest");
    document.getElementById("Search").innerHTML = find; //would return 4 since the the Q in quest is the 4th charater in the string. 
}

function String_Method() {// converts a number to a string
    var X = 420;
    document.getElementById("Number_to_String").innerHTML = X.toString();
}

function to_Percision_Method() {//formats a number to a specific length
    var X = 3.14159265359
    document.getElementById("Percision").innerHTML = X.toPrecision(4);
}

function Fixed_Method() { //toFixed round a number up to a specific decimal
    var X = 7.8247;
    document.getElementById("Fixed").innerHTML=X.toFixed();
}

function Value_Method() { //Returns the primative value of a tring
    var Text = "May it be a light to you in dark places, when all other lights go out."
    var result = Text.valueOf();
    document.getElementById("Value").innerHTML = result;
}