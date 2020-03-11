const deepCopyObject = objToCopy => {
   if(objToCopy == null || typeof objToCopy != 'object')
   {
       return objToCopy;
   }
   let temporaryObject = objToCopy.constructor()
   for (var key in objToCopy) {
    temporaryObject[key] = keepCloning(objToCopy[key]);
  }
  return temporaryObject
};


export { deepCopyObject };
