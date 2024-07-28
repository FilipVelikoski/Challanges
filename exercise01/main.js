function isIPv4Address(inputString) {
  const parts = inputString.split(".");

  if (parts.length !== 4) {
    return false;
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (part === "") {
      return false;
    }

    if (isNaN(part)) {
      return false;
    }

    const num = Number(part);

    if (num < 0 || num > 255) {
      return false;
    }

    if (part.length !== num.toString().length) {
      return false;
    }
  }

  return true;
}

console.log(isIPv4Address("172.16.254.1"));
console.log(isIPv4Address("172.316.254.1"));
console.log(isIPv4Address(".254.255.1"));
