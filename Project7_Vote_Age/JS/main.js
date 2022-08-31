function Vote_Age() {
    var Age, Can_vote;
    Age=document.getElementById("AGE").value;
    Can_vote = (Age < 18) ? "You are too young  ":"You are old enough  ";
    document.getElementById("Vote").innerHTML= Can_vote + "to vote.";
}