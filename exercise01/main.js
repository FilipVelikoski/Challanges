// Exercise 01

const year = parseInt(prompt("Enter a year:"));

const paragraph = document.createElement("p");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  paragraph.innerHTML = "The year is a leap year.";
  paragraph.style.color = "green";
} else {
  paragraph.innerHTML = "The year is not a leap year.";
  paragraph.style.color = "red";
}

document.body.appendChild(paragraph);
