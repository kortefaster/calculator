let operandA = ``;
let operandB = ``;
let operator = ``;

let operation = function(a, symbol, b){
    let result;
    a = +a;
    b = +b;

    switch (symbol) {
        case `addition`:
            result = a + b;
            
            break;
        case `difference`:
            result = a - b;
            
            break;
         case `multiply`:
            result = a * b;
            break; 
        case `divide`:
            result = a / b;
            break       
        default:
            break;
    }
    // console.log(result);
    return result;

};






let displayContent = document.querySelector(`#calculatorDisplay`)
let buttonTest = document.querySelectorAll('button');

buttonTest.forEach(function(button) {
    button.addEventListener("click", function (e) {
      // do something when the button is clicked

        if (operandA !== ``){
            if (e.currentTarget.className === `operator`){
             // console.log(e.currentTarget.className)
            operator = e.currentTarget.value;
            
             console.log(`you choose operator to be: ${operator}`);
            }
        }


        if (operator === ``){
            if (e.currentTarget.className === `operand` || e.currentTarget.className === `operandZero`){
            // console.log(e.currentTarget.className)
            operandAClick = e.currentTarget.value;
            operandA += operandAClick;
            displayContent.textContent = `${operandA}`;
            console.log(`you choose operandA to be: ${operandA}`);
            }
        
        }
         else if(operator !== ''){
          if (e.currentTarget.className === `operand`|| e.currentTarget.className === `operandZero`){
            // console.log(e.currentTarget.className)
            operandBClick = e.currentTarget.value;
            operandB += operandBClick;
            displayContent.textContent = `${operandB}`;
            console.log(`you choose operandB to be: ${operandB}`);
             }
        
        // console.log(`operandA: ${operandA}`)
        // console.log(`operandB: ${operandB}`)
      }
    // else if (operandB !== ``){
        if (e.currentTarget.value === `equals`){
            // console.log(operandA, operator, operandB);
            let resultFinal = operation(operandA, operator, operandB);
            resultFinal = resultFinal.toPrecision(4);
            console.log(` ${operandA} ${operator} ${operandB} = ${resultFinal}`);
            // console.log(typeof resultFinal);
            operandA = resultFinal;
            operandB = `` ;
            operator = ``;
            displayContent.textContent = `${resultFinal}`;
            return;
            // let operandA = resultFinal.toString();
            // console.log(`you choose operandA to be: ${result}`);
        }
        if (e.currentTarget.value === `clear`){
            console.log(`CLEAR`);
            operandA = `` ;
            operandB = `` ;
            operator = `` ;
            displayContent.textContent = ``;
        }

    
      
    //   console.log(`you clicked on ${e.currentTarget.className}`);


    });
  });






//   let difference = function(a, b){
//     operand = `-`
//     operation(a, operand, b);
// };
// let addition = function(a, b){
//     operand = `+`
//     operation(a, operand, b);
// };
// let multiply = function(a, b){
//     operand = `*`
//     operation(a, operand, b);
// };
// let divide = function(a, b){
//     operand = `/`
//     operation(a, operand, b);
// };