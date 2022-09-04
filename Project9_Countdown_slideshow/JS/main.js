function countdown() {
    var seconds = document.getElementById("seconds").value

    function tick() {
        seconds = seconds -1;
        Timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second). 

        if (seconds == -1) {
            alert("Times Up!");
            clearTimeout(time);
            Timer.innerHTML = "";
        }
    }
    tick();
}