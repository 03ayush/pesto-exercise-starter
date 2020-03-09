const animalSort = animals => {
    animals.sort((firstObject,secondObject)=>{
     var x = firstObject.numberOfLegs
     var y = secondObject.numberOfLegs
     if(x == y)
     {
         return firstObject.name.toLowerCase() - secondObject.name.toLowerCase()
     }
     return x - y 
    })
    return animals
};

export { animalSort };


{name: 'Snake', numberOfLegs: 0 }