//This variable keeps track of whose turn it is. 
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];


//This function is for placing an x or o in a square. 
function placeXorO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectedSquares array
    //to see if it containes the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrives the HTML elements id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whose turn it is.
        if (activePlayer === "X") {
            //if activePlayer is equal to 'X', the x.png is placed in the HTML
            select.style.backgroundImage = 'url("images/Bones.png")';
            //active player can only be X or O. So if it is not X it must be O
        }
        else {
            //if active player is equal to O, theo.png is placed in the html
            select.style.backgroundImage = 'url("images/Jack-O.png")';
        }
        //squareNumber and activePlayer are concatenated together ans added to array. 
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions. 
        checkWinConditions();
        //this condition is for changing active player.
        if (activePlayer === 'X') {
            //if active player is 'x' change it to 'o'.
            activePlayer = 'O';
            //if active player is anything other than 'X'.
        }
        else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }

        //This funtionplays placement sound.
        audio('./media/bones_drop.mp3');
        //this condition check to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn.
            disableClick();
            //This function waites 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This funtion results in a random square being selected by the computer. 
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXorO(pickASquare)) {
                //This line calls the funtion.
                placeXorO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions. 
//drawline() function is called to drawe a line on the screen of the condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304, 558, 304)}
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '3X')) { drawWinLine(100, 50,100, 558)}
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    // X 6, 4, 2 condition.
    else if (arrayIncludes( '6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    //O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    // O 6, 7, 8 condition. 
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    //O 0, 3, 6 condition.
    else if (arrayIncludes( '0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    //O 1, 4, 7 condition. 
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    //O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    // O 6, 4, 2 condition. 
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    // O 0, 4, 8 condition. 
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //This condition checks for the tie. If none of the above conditions are met 
    //and 9 squares are selectes the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound. 
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called. 
        setTimeout(function () {resetGame();}, 500);

    }

    //This function checks if an array includes a strings. It is used to check for each condition. 
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row. 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass aew all included in our array then 
        //true is returned and our "else if" condition executes the drawLine() function.
        if(a === true && b === true && c=== true) {return true;}
    }
}

//-------------------This funtion makes our body element temporarily unclickable. so that the computer can play
function disableClick() {
    //this makes our body unclickable. 
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000); 
} 

//This function takes a string paramater of the path you set earlier for placement sound('./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a paramater.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound. 
    audio.play();
}

//-------drawing the win lines ---------------------------------------
//THis function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element. 
    const canvas = document.getElementById("win-lines");
    //This line gives us access to to methods and properties to use on canvas.
    const c =canvas.getContext('2d');
    //This line indicates where the start of a lines X axis is. 
    let x1 =coordX1, 
        //This line indicates where the start of a lines y axis is.
        y1 =coordY1, 
        //this line indicates where the end of a lines X axis is. 
        x2 =coordX2, 
        //This line indicates where the end of a lines y axis is. 
        y2 = coordY2, 
        //This variable stores temp x axis data we update in our animation loop. 
        x=x1, 
        //this variable stores temp y axis data we update in our animation loop.
        y =y1;
        
        //This function interacs with the canvas. 
        function animateLineDrawing() {
            //This variable create a loop. 
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //This method clears content from the last loop iteration. 
            c.clearRect(0, 0, 608, 608);
            //THis method starts a new path. 
            c.beginPath();
            //This method moves us to a starting point in our line.
            c.moveTo(x1,y1);
            //THis method indicates end point in our line. 
            c.lineTo(x, y);
            //this method set the width of our line. 
            c.lineWidth= 10; 
            //this line sets color of our line. 
            c.strokeStyle = 'rgba(70, 255, 33, .8)';
            //This method draws everything we laid out above.
            c.stroke();
            //This condition checks if we've reached the endpoints. 
            if (x1<= x2 && y1 <= y2) {
                //This condition adds 10 to the privious end X endpoint
                if(x <  x2) {x += 10;}
                //This condition adds 10 to the preivious end y endpoint.
                if (y< y2) {y += 10;}
                //This is for 6,4,2 win conditions.
                if (x>= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
            } 
            //similar to above, this is for 4, 2, 6, win conditions
            if(x1 <= x2 && y1 >=y2) {
                if(x < x2) {x += 10;}
                if(y > y2) {y -= 10;}
                if (x >= x2 && y<= y2) {cancelAnimationFrame(animationLoop);}
            }

        }

        //This function clears our canvas after our win line is drawn. 
        function clear() {
            //This line starts our animation loop. 
            const animationLoop =requestAnimationFrame(clear);
            //This line clears our canvas. 
            c.clearRect(0, 0, 608, 608);
            //This line stops our animation loop. 
            cancelAnimationFrame(animationLoop);
        }
        //This line disallows clicking while the win sound is playing
        disableClick();
        //this line plays the win sounds. 
        audio('./media/win_chimes.mp3');
        //This line calls our main animation loop. 
        animateLineDrawing();
        //This line waits 1 second. Then, clears canvas, resets games, and allwos clicking again. 
        setTimeout(function() { clear(); resetGame(); }, 1000);

}

//___________________Canvas reset________________________
//this function resets game if there is a tie or win. 
function resetGame() {
    for (let i=0; i<9; i++)// this loop iterastes through each square element. 
        {let square = document.getElementById(String(i));
        square.style,backgroundImage = "";
        }
        //This resets array so it is empty so we can start over. 
        selectedSquares = [];
}