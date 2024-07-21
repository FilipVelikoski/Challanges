const nrRows = prompt("Enter a number of rows:");
const nrColumns = prompt("Enter a number of colums:");

function generateTable(nrRows, nrColumns) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  for (let i = 0; i < nrRows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < nrColumns; j++) {
      let cell;
      if (i === 0) {
        cell = document.createElement("th");
        cell.textContent = `Header ${j + 1}`;
      } else {
        cell = document.createElement("td");
        cell.textContent = `Row ${i} Col ${j + 1}`;
      }

      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  document.body.appendChild(table);
}

generateTable(nrRows, nrColumns);
