// select elements
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const dateInput = document.querySelector("#date");
const categorySelect = document.querySelector("#category");
const expensesList = document.querySelector("#expensesList");

let expenses = [];
let editingExpense = null;

// functions
// Exercise 01
function addOrUpdateExpense() {
  const description = descriptionInput.value;
  const amount = +amountInput.value;
  const date = dateInput.value;
  const category = categorySelect.value;

  if (!description || !amount || !date || !category) return;

  if (editingExpense) {
    const editingIdx = expenses.indexOf(editingExpense);

    expenses[editingIdx].description = description;
    expenses[editingIdx].amount = amount;
    expenses[editingIdx].date = date;
    expenses[editingIdx].category = category;

    editingExpense = null;
    saveExpenses();
  } else {
    const newExpenes = {
      description,
      amount,
      date,
      category,
    };

    expenses.push(newExpenes);
  }

  descriptionInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
  categorySelect.value = "Food";

  displayExpenses();
  saveExpenses();
}

function displayExpenses() {
  expensesList.innerHTML = "";

  expenses.forEach((expense, idx) => {
    const row = document.createElement("tr");

    const description = document.createElement("td");
    description.textContent = expense.description;

    const amount = document.createElement("td");
    amount.textContent = `$${expense.amount}`;

    const date = document.createElement("td");
    date.textContent = expense.date;

    const category = document.createElement("td");
    category.textContent = expense.category;

    const actionBtn = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-primary");
    editBtn.textContent = "Edit";
    // Exercise 03
    editBtn.addEventListener("click", function () {
      descriptionInput.value = expense.description;
      amountInput.value = expense.amount;
      dateInput.value = expense.date;
      categorySelect.value = expense.category;

      editingExpense = expense;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "ml-1");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      const isConfirmed = confirm(
        `Are you sure you want to delete "${expense.description}"`
      );
      if (!isConfirmed) {
        return;
      }
      onDeleteExpenses(idx);
    });

    actionBtn.append(editBtn, deleteBtn);

    row.append(description, amount, date, category, actionBtn);

    expensesList.appendChild(row);
  });
}

// Exercise 02
function onDeleteExpenses(idx) {
  expenses.splice(idx, 1);
  displayExpenses();
  saveExpenses();
}

// Exercise 04
function sortExpenses(field, direction) {
  if (field === "amount") {
    if (direction === "asc") {
      expenses.sort((a, b) => a.amount - b.amount);
    } else if (direction === "desc") {
      expenses.sort((a, b) => b.amount - a.amount);
    }
  }
  displayExpenses();
  saveExpenses();
}

// Exercise 05
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
function loadExpenses() {
  expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  displayExpenses();
}
loadExpenses();
