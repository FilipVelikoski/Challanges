function addBorder(picture) {
  const borderLength = picture[0].length + 2;

  let border = "";
  for (let i = 0; i < borderLength; i++) {
    border += "*";
  }

  const result = [border];

  for (let i = 0; i < picture.length; i++) {
    result.push(`*${picture[i]}*`);
  }

  result.push(border);

  return result;
}

const picture = ["abc", "ded"];
console.log(addBorder(picture));
