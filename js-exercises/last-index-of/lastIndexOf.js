
function lastIndexOf(...args) {
  const numberToBeSearched = args[0]
  const inputArray = args[1]
  var index = 0
  var lastIndexOfNumberInArray = inputArray.reduce((lastUpdatedIndex,arrayInput) =>{
    if(numberToBeSearched === arrayInput){
      lastUpdatedIndex = index
    }
    index++
  return lastUpdatedIndex  
  },-1)
  return lastIndexOfNumberInArray
}

export {
  lastIndexOf,
};
