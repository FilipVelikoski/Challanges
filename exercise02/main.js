// Exercise 02

const grade = parseFloat(prompt("Enter your grade:"));

const h1 = document.createElement("h1");

if (grade >= 90) {
  h1.innerHTML = "Your grade is A";
  h1.style.color = "green";
} else if (grade >= 80 && grade < 90) {
  h1.innerHTML = "Your grade is B";
  h1.style.color = "blue";
} else if (grade >= 70 && grade < 80) {
  h1.innerHTML = "Your grade is C";
  h1.style.color = "blue";
} else if (grade >= 60 && grade < 70) {
  h1.innerHTML = "Your grade is D";
  h1.style.color = "orange";
} else if (grade >= 0 && grade < 60) {
  h1.innerHTML = "Your grade is F";
  h1.style.color = "red";
} else {
  h1.innerHTML = "Invalid grade";
}

document.body.appendChild(h1);
