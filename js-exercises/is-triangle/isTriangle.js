function isTriangle(firstSide , secondSide , thirdSide) {
  const isValidTriangle = ((firstSide+secondSide > thirdSide) ?
   ((firstSide + thirdSide > secondSide) ? 
    ((secondSide + thirdSide > firstSide) ? true : false) : false ) :false )
}
return isValidTriangle

export {
  isTriangle,
};
