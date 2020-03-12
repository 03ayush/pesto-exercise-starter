/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
     const resultingArray = [];
     const noOfPermutation = (arr, permutation = []) => {
    if (arr.length == 0) {
      result.push(permutation);
    } else 
    {
      for (let i = 0; i < arr.length; ++i) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        noOfPermutation(curr.slice(), permutation.concat(next));
      }
    }
  };

  noOfPermutation(inputArr);

  return result;
};

export { permutateWithoutRepetitions };
