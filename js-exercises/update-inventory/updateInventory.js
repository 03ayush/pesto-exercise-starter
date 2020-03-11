function updateInventory(...args) {
var firstInventory = args[0]
var secondInventory = args[1]
firstInventory.forEach(element => {
  let elementPresentInBoth = secondInventory.find(elementSearch =>{
    if(firstInventory[1] == secondInventory[1])
    {
      firstInventory[0]+=secondInventory[0]
      return true;
    }
  })
  if(!elementPresentInBoth)
  firstInventory.push(element)
});
firstInventory.sort((a,b)=>{
  const firstItem = a[1].toLowerCase()
  const secondItem = b[1].toLowerCase()
  return firstItem - secondItem 
}
)
return firstInventory
}
export {
  updateInventory,
};
