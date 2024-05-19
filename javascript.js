let operandA = ``;
let operandB = ``;
let operator = ``;

let operation = function(operandA, operand, operandB){
    let result;
    switch (operand) {
        case `+`:
            result = operandA + operandB;
            
            break;
        case `-`:
            result = operandA - operandB;
            
            break;
         case `*`:
            result = operandA * operandB;
            break; 
        case `/`:
            result = operandA / operandB;
            break       
        default:
            break;
    }
    console.log(result);
    return result;

};


let difference = function(a, b){
    operand = `-`
    operation(a, operand, b);
};
let addition = function(a, b){
    operand = `+`
    operation(a, operand, b);
};
let multiply = function(a, b){
    operand = `*`
    operation(a, operand, b);
};
let divide = function(a, b){
    operand = `/`
    operation(a, operand, b);
};

let buttonTest = document.querySelectorAll('button');

buttonTest.forEach(function(button) {
    button.addEventListener("click", function (e) {
      // do something when the button is clicked

      if (e.currentTarget.className === `operator`){
        // console.log(e.currentTarget.className)
        operator = e.currentTarget.value;
        console.log(`you choose operator to be: ${operator}`)
        
    }


      if (operator === ``){
        if (e.currentTarget.className === `operand` || e.currentTarget.className === `operandZero`){
            // console.log(e.currentTarget.className)
            operandA = e.currentTarget.value;
            console.log(`you choose operandA to be: ${operandA}`)
        }
        
      }
      else if(operator !== ''){
        if (e.currentTarget.className === `operand`|| e.currentTarget.className === `operandZero`){
            // console.log(e.currentTarget.className)
            operandB = e.currentTarget.value;
            console.log(`you choose operandB to be: ${operandB}`)
        }
        
        // console.log(`operandA: ${operandA}`)
        // console.log(`operandB: ${operandB}`)
      }
    //   console.log(`you clicked on ${e.currentTarget.className}`);
    });
  });


