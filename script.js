// select elements
const studyDuration = document.querySelector("#studyDuration");
const breakDuration = document.querySelector("#breakDuration");
const btn = document.querySelector("#startButton");
const progressBar = document.querySelector("#progressBar");
const sessionHistory = document.querySelector("#sessionHistory");

let intervalId = null;

// Functions

// Exercise 1
function saveDurations() {
  const inputStudy = studyDuration.value;
  const inputBreak = breakDuration.value;

  localStorage.setItem("studyDuration", inputStudy);
  localStorage.setItem("breakDuration", inputBreak);
}

window.onload = function () {
  const savedStudyDuration = localStorage.getItem("studyDuration");
  const savedBreakDuration = localStorage.getItem("breakDuration");

  if (savedStudyDuration) {
    studyDuration.value = savedStudyDuration;
  }
  if (savedBreakDuration) {
    breakDuration.value = savedBreakDuration;
  }
};

// EventListener;
btn.addEventListener("click", saveDurations);
