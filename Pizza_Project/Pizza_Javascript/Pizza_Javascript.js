function getReceipt() {
    //This initializes our string so it can get passed from function to function, 
    //growing into a full receipt. 
    var text1 = "<h4> You ordered:</h4>";
    var runningTotal= 0;
    var sizeTotal = 0;
    var sizeArray= document.getElementsByClassName("size");
    for (var i =0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { //this starts a loop to check the size array and stop at the checked index and stores the price of that index. 
            var selectedSize = sizeArray[i].value;
            text1=text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;//price
    }
    else if (selectedSize ==="Small Pizza") {
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    else if (selectedSize === "Party Size Pizza"){
        sizeTotal = 24;
    }
    runningTotal = sizeTotal;// this starts storing information in running total and passes to the next function. so far it has the pizza size stored. 
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) { //this function will check for selected toppings in a loop and tally them in runningTotal 
    var ToppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j= 0; j< toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+ toppingArray[j].value+")");
            text1= text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        ToppingTotal = (toppingCount - 1);//this will take away one topping from the running total price
    }
    else {
        ToppingTotal= 0;//adds all the toppings checked in the array
    }
    runningTotal = (runningTotal + ToppingTotal);//this puts the value of the size and toppings together
    console.log("total selcted topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = " +"$"+ToppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total:  "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h4>Total: <strong>$"+runningTotal+" .00"+"<strong></h4>"; 
};