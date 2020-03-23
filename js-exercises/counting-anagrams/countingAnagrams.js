const countingAnagrams = (str) => {
    const tempAnagrams = {}
    let flag = 0
    str.forEach((loopingArrayWord)=>{
      const wordAfterSorting = returnTheWordInSorted(loopingArrayWord)
      if(tempAnagrams[wordAfterSorting])
      {
          if(wordAfterSorting.length > 1)
          flag++
          return tempAnagrams[wordAfterSorting].push(loopingArrayWord)
      }
      tempAnagrams[wordAfterSorting] = loopingArrayWord
    })
   return flag;
};

function returnTheWordInSorted(word) {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}
export { countingAnagrams };
