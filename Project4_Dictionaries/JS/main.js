function my_desserts() {
    var Dessert = {
        Name:"Souffle",
        Flavor:"Chocolate Orange",
        Flavor:"Chocolate Almond", //this a repeat key. If there is a double entry, it will choose the key in alphabetical order
        Serve:"Hot",
        Diffuculty:"hard"
    }
    document.getElementById("Dictionary").innerHTML=Dessert.Flavor //this will fetch the value under the flavor key in the dessert dictionary. 

}
function Lets_Delete() {
    var Dessert = {
        Name:"Devels Food cake",
        Flavor:"dark Chocolate",
        Serve:"warm with hot fudge",
        Diffuculty:"easy"
    };
    delete Dessert.Flavor;// delete will deleate the key and value of Flavor. 
    document.getElementById("delete").innerHTML=Dessert.Flavor //This tries to get the Value of Flavor, but because we deletaed it in the privius line, it will return "undefined".
}
