// select elements
const currentDateDisplay = document.querySelector("#currentDate");
const taskDescriptionInput = document.querySelector("#taskDescription");
const taskTimeInput = document.querySelector("#taskTime");
const taskDateInput = document.querySelector("#taskDate");
const taskList = document.querySelector("#taskList");
let tasks = [];
// display current date
const currentDate = new Date().toISOString().split("T")[0];
currentDateDisplay.textContent = `Today is ${new Date().toDateString()}`;

// Functions
// Exercise 01
function addTask() {
  const taskDescriptionValue = taskDescriptionInput.value;
  const taskTimeValue = taskTimeInput.value;
  const taskDateValue = taskDateInput.value;

  if (!taskDescriptionValue) {
    alert("Please fill in the name.");
    return;
  }

  if (!taskTimeValue) {
    alert("Please fill in the time.");
    return;
  }

  if (!taskDateValue) {
    alert("Please fill in the date.");
    return;
  }
  const taskObj = {
    description: taskDescriptionValue,
    time: taskTimeValue,
    date: taskDateValue,
  };

  tasks.push(taskObj);

  taskDescriptionInput.value = "";
  taskTimeInput.value = "";
  taskDateInput.value = "";

  displayTask();
  highlightTask();
  saveTasks();
}

function displayTask() {
  taskList.innerHTML = "";

  tasks.forEach((task, idx) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    li.textContent = `${task.date} at ${task.time}: ${task.description}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-danger");
    removeButton.addEventListener("click", () => {
      onRemoveTask(idx);
    });

    li.append(removeButton);

    taskList.appendChild(li);
  });
}
// Exercise 02
function onRemoveTask(idx) {
  tasks.splice(idx, 1);
  displayTask();
  highlightTask();
  saveTasks();
}

// Exercise 03
function highlightTask() {
  const taskItems = document.querySelectorAll("#taskList li");

  tasks.forEach((task, idx) => {
    if (task.date === currentDate) {
      taskItems[idx].classList.add("highlight-current-date");
    } else {
      taskItems[idx].classList.remove("highlight-current-date");
    }
  });
}

// Exercise 04
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  displayTask();
  highlightTask();
}
loadTasks();
