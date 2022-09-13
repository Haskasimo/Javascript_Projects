//createes an object to keep track of values
const Calculator = {
    //This will display 0 on the calculator screen
    Display_Value:'0', 
    //This will hold the first opperand for any expressions, we set is to Null for now. 
    First_Opperand: null,
    //THis checks wether or not the second operand has been inputted by the user. 
    Wait_Second_Opperand:false, 
    //this will hold the operator, it is set to null for now. 
    operator:null,  

};

//This modifies the values each time a button is clicked. 
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Opperand} =Calculator;
    //This checks if the Wait_second_opperand is true, and sets Display_Value to the key that was clicked.
    if (Wait_Second_Opperand=== true) {
        Calculator.Display_Value= digit;
        Calculator.Wait_Second_Opperand = false;
    }
    else {
        //This overwrites Display_value if the current value is 0, otherwise, it adds to it. 
        Calculator.Display_Value  =Display_Value === '0' ? digit: Display_Value + digit;
    }

}

//THis section handles decimal points. 
function Input_Decimal(dot) {
    //THis ensures that accidental clicking os the decimal point doesn't cause bugs. 
    if (Calculator.Wait_Second_Opperand === true) return;
    if(!Calculator.Display_Value.includes(dot)){
        // if the Display_value does not contain a decimal point we want to add a decimal point. 
        Calculator.Display_Value += dot;
    }
}

//THis section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Opperand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number displayed to a number
    // and then store the result in Calculator.First_Operand if it doesn't already exsist. 
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an oparatior already exsits and if wait_Second_Operand is true, then updates the 
    //operator an exits from the function. 
    if (operator && Calculator.Wait_Second_Opperand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Opperand == null) {
        Calculator.First_Opperand = Value_of_Input;
    }
    else if (operator) {
        const Value_Now = First_Opperand || 0;
        //If operator exists, property lookup is performed for the operator in the Perform_Calculation
        //object and the function that matches the operator is executed. 
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed (9);
        //This will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Opperand = parseFloat(result);
    }
    Calculator.Wait_Second_Opperand = true;
    Calculator.operator = Next_Operator;
    }

    const Perform_Calculation = {
        '/': (First_Opperand, Second_Operand) => First_Opperand / Second_Operand, 
        '*': (First_Opperand, Second_Operand) => First_Opperand * Second_Operand,
        '+': (First_Opperand, Second_Operand) => First_Opperand + Second_Operand,
        '-': (First_Opperand, Second_Operand) => First_Opperand - Second_Operand,
        '=': (First_Opperand, Second_Operand) => Second_Operand 
    };
    
    function Calculator_Reset() {
        Calculator.Display_Value = '0';
        Calculator.First_Opperand = null;
        Calculator.Wait_Second_Opperand = false;
        Calculator.operator = null;
    }
    //THis function updates the calculator screen with the contents od Display_Value
    function Update_Display() {
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }

    Update_Display();
    //This selection monitors button clicks
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const {target} = event;
        if(!target.matches('button')) {
            return;
        }
        if(target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }
        
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }
        //Ensures that AC clears all inputs from the Calculator screen. 
        if (target.classList.contains('all-clear')) {
            Calculator_Reset();
            Update_Display();
            return;
        }
        Input_Digit(target.value);
        Update_Display();
    })
