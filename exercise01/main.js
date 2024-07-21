const myArray = [3, 4, 10, 20, 40, 7, 100, 34];

function transformArray(arr) {
  let transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 10) {
      transformedArray.push(arr[i] * 2);
    } else {
      transformedArray.push(arr[i] * 4);
    }
  }

  return transformedArray;
}

const transformedArray = transformArray(myArray);

console.log(transformedArray);
