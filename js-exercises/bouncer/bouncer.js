function bouncer(array) {
  let arrayContainingTruthy =  array.filter(element =>{
        return element
    })
    return arrayContainingTruthy
}

export { bouncer };
