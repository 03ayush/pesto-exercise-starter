
function alternatingCharacters(arr) {
    let flag = 0
    var noOfCharactersToDelete = arr.map(stringToConsider =>{
      if(stringToConsider.length>1)
      {
        flag = 0
     for(let i = 0 ; i<stringToConsider.length-1;i++)
     {
         if(stringToConsider.charCodeAt(i) == stringToConsider.charCodeAt(i+1))
             flag++
     }
      }
      return flag
    })
    return noOfCharactersToDelete
  }

export { alternatingCharacters };
