// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  let inputSort = input.sort();
  if (inputSort.length % 2 === 0) {
    return (
      (inputSort[inputSort.length / 2] + inputSort[inputSort.length / 2 - 1]) /
      2
    );
  } else {
    return inputSort[Math.floor(inputSort.length / 2)];
  }
}

console.log(result(input));
