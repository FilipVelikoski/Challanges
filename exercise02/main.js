const password = prompt("Enter your password:");
document.getElementById("password").innerText = "Password: " + password;
const paragraph = document.getElementById("message");

if (password.length < 8) {
  paragraph.textContent = "Password must be at least 8 characters long.";
} else {
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(+password[i])) {
      hasNumber = true;
      break;
    }
  }

  const capitalLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let hasCapital = false;
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    for (let j = 0; j < capitalLetters.length; j++) {
      if (char === capitalLetters[j]) {
        hasCapital = true;
        break;
      }
    }
  }

  if (!hasNumber) {
    paragraph.textContent = "Password must contain at least one number.";
  } else if (!hasCapital) {
    paragraph.textContent =
      "Password must contain at least one uppercase letter.";
  } else {
    paragraph.textContent = "Your password is valid!";
  }
}
