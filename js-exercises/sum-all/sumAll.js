function sumAll(firstNumber , secondNumber) {

let totalNoOfIntegers = (secondNumber > firstNumber) ? 
(secondNumber - firstNumber ) + 1 :
(firstNumber - secondNumber) + 1

return (totalNoOfIntegers / 2) * (firstNumber + secondNumber)       

}

export {
  sumAll,
};
