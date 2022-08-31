// this object constructor function will not work because the variable "switch" is a pre-assigned Keyword, and it will cause conflict in the code. 
function Cat(breed, color, size, region) {
    this.Cat_Breed=breed;
    this.Cat_Color=color;
    this.Cat_size=size;
    this.Cat_region=region;
}
var switch =new Cat("Bengal", "leperd spoted", "medium-large", "Egypt");
var Ragdoll=new Cat("Ragdoll", "colorpoint", "large", "United States");
var Munchkin=new Cat("Munchkin", "any", "small", "United States");

function Key_Words(){
   document.getElementById("Cant_Use").innerHTML="The  " + switch.Cat_Breed + "  comes from " + switch.Cat_region + "it comes in" + switch.Cat_Color +"  color.";
}