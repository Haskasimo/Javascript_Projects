var x = 10, y=45 //This is how you assign veribales, but this will not be shown on the page. 

function addition() {
    var x= 10, y = 45;
    document.getElementById ("answer").innerHTML = x+y;

};
document.getElementById ("purple").style.color ="purple";//This code is outside the function and will show up on load.
//To run it, you must add "defer" at the end of the src tag in the HTML file.
//If you want it to run with the rest of the funtion with the button trigger, it must be moved inside to funtion brackets. 
