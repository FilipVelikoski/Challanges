const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function checkPrimes(array) {
  return array.map(isPrime);
}

const result = checkPrimes(array);
console.log(result);
