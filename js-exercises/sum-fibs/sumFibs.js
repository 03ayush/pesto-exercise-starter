function sumFibs(num) {
let sumOfOddFibonacciNumber = 0
for(let i=1; ;i++)
{
  let fibonacciNumber = fibonacci(i)
  if (fibonacciNumber <= num){
    if(fibonacciNumber%2 !=0)
    sumOfOddFibonacciNumber += fibonacciNumber
  }
  else{
    break;
  }
  continue;
}
return sumOfOddFibonacciNumber
}

function fibonacci(number)
{
  if(number <= 1)
  return number
  else
  return fibonacci(number-1) + fibonacci(number-2) 
}

export {
  sumFibs,
};
