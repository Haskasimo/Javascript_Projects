function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short to ride  ":"You are tall enough  ";//the ? states the if the conditions is true: or if the condition is false.. then give statement like this (expression if true: expression if false).
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
    //here the condition is Height<52cm. 
}


//this is an object constructor funtion. the "this" keyword assigns the property identifiers. 
function Vehicle(make, model, year, color) {
    this.Vehicle_Make=make;
    this.Vehivle_Model=model;
    this.Vehicle_year = year;
    this.Vehicle_color= color;
}
//"new" creates objects based on the object constructor function
var Jack=new Vehicle("Dodge", "Viper", 2020, "red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black" );
var Erik= new Vehicle("Ford", "Pinto", 1971, "Musterd");

function my_function() {
    document.getElementById("New_and_This").innerHTML="Erik drives a  " + Erik.Vehicle_color + "   " + Erik.Vehicle_Make + "    Made in the year  " + Erik.Vehicle_year;
}
//This is a nested function. The Count function is nested inside the count_function, and the Plus_one function is nested inside the countfuntion. the funtions will triger when the parent funtion needs information. 
function count_function(){
    document.getElementById("counting").innerHTML=Count();
    function Count() {
        var Starting_point = 4;
        function Pluse_one() {Starting_point += 1;}
        Pluse_one();
        return Starting_point;
    }
}