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
  displaySessionLog();
};

// Exercise 2
function updateProgressBar(totalDuration) {
  const totalTime = totalDuration * 60;
  let timePassed = 0;

  intervalId = setInterval(function () {
    timePassed += 1;
    const percentage = (timePassed / totalTime) * 100;
    progressBar.style.width = percentage + "%";

    if (timePassed >= totalTime) {
      clearInterval(intervalId);
      intervalId = null;
      alert("Study and Break session completed!");
    }
  }, 1000);
}

function startTimer() {
  if (intervalId !== null) {
    alert("Session is already running.");
    return;
  }

  const inputStudy = parseInt(studyDuration.value);
  const inputBreak = parseInt(breakDuration.value);

  if (
    isNaN(inputStudy) ||
    isNaN(inputBreak) ||
    inputStudy <= 0 ||
    inputBreak <= 0
  ) {
    alert("Please enter valid durations.");
    return;
  }

  const totalDuration = inputStudy + inputBreak;
  saveDurations();

  logSession(inputStudy, inputBreak);

  // Exercise 03
  setTimeout(function () {
    alert("Study session complete. Break time starts now!");
  }, inputStudy * 60 * 1000);

  setTimeout(function () {
    alert("Break time over. Time to resume studying!");
  }, (inputStudy + inputBreak) * 60 * 1000);

  updateProgressBar(totalDuration);
}

// Exercise 4
function logSession(inputStudy, inputBreak) {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const sessionData = {
    date,
    time,
    inputStudy,
    inputBreak,
  };

  let sessionLog = JSON.parse(localStorage.getItem("sessionLog")) || [];

  sessionLog.push(sessionData);
  localStorage.setItem("sessionLog", JSON.stringify(sessionLog));

  displaySessionLog();
}

function displaySessionLog() {
  const sessionLog = JSON.parse(localStorage.getItem("sessionLog")) || [];

  sessionHistory.innerHTML = "";

  sessionLog.forEach((session) => {
    const li = document.createElement("li");
    li.textContent = `Date: ${session.date} Time: ${session.time} - Study: ${session.inputStudy} minutes, Break: ${session.inputBreak} minutes`;
    sessionHistory.appendChild(li);
  });
}
// EventListener;
btn.addEventListener("click", function () {
  startTimer();
});
