const arr = [1, 2, 3, 4, 5];
const chunkSize = 2;

function chunkArray(array, chunkSize) {
  const result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}

const chunkedArray = chunkArray(arr, chunkSize);

console.log(chunkedArray);
