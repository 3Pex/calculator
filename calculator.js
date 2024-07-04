// CALCULATOR PROGRAM

const display = document.getElementById("display")

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try{
        // Replace ^ with ** for exponentiation
        let expression = display.value.replace('^', '**');
        // Replace √ followed by a number or parenthesis with Math.sqrt
        expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');
        display.value = eval(expression);
    }
    catch(error){
        display.value = "error"
    }
}
