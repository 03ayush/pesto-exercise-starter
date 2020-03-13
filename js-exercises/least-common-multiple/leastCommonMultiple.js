
function leastCommonMultiple(...args) {
  let largestNumber = Math.max(args[0],args[1])
  let smallNumber = Math.min(args[0],args[1])
  
  let lcm = largestNumber
  while(lcm%smallNumber != 0)
  {
    lcm+=largestNumber
  }
  return lcm
}

export {
  leastCommonMultiple,
};
