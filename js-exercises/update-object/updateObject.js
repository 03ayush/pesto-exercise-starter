
function updateObject(...args) {
  let indexToBeChanged = args[0]
  let elementToBeInserted = args[1]
  let arrayToBeChanged = args[3]
  if(indexToBeChanged < 0)
  {
    indexToBeChanged = arrayToBeChanged.length - indexToBeChanged
  }
  arrayToBeChanged[indexToBeChanged] = elementToBeInserted
}

export {
  updateObject,
};
