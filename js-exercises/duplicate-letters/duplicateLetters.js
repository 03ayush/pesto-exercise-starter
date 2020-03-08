
function duplicateLetters(...args) {
  const wordToBeChecked = args[0]
  let count = 0
  let wordInArray = wordToBeChecked[0]
  for(let i= 0; i<wordToBeChecked.length;i++)
  {
    wordInArray = wordInArray[i]
    let maxCountForAletter = wordToBeChecked.reduce(function(maxWordCount,currentLetter){
      if(wordInArray == currentLetter)
      maxWordCount++
      return maxWordCount
    },0)
    count = (count > maxCountForAletter) ? count : maxCountForAletter
  }
  const returnValue = (count>1) ? count : false
  return returnValue 
  //return args;
}

export {
  duplicateLetters,
};
