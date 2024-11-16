// $(function() {
// 	// write your code here
// });

const bikesContainer = document.querySelector(".bikes-container");
const btnShowAll = document.querySelector("#showAll");
const numberOfBikes = document.querySelectorAll(".number-bikes");
const hover = document.querySelectorAll(".hover-group");

const btnMale = document.querySelector("#male");
const btnFemale = document.querySelector("#female");

let allProducts = [];
let selectedGender = "all";
let selectedBrand = null;

function fetchData() {
  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((res) => res.json())
    .then(onShowAll)
    .catch((error) => console.error("Error fetching data:", error));
}

function onShowAll(bikes) {
  console.log(bikes.products);
  allProducts = bikes.products;
  updateBikeCounts();
  renderProducts(allProducts);
  setDefaultActiveFilter();
}

function renderProducts(products) {
  const row = bikesContainer.querySelector(".row");
  row.innerHTML = "";

  products.forEach((bike) => {
    const col = document.createElement("div");
    col.classList.add("col");

    const imagePath = `./img/${bike.image}.png`;

    col.innerHTML = `
      <div class="card" style="width: 100%">
        <img src="${imagePath}" alt="${bike.name}" class="bike-img" />
        <div class="card-body">
          <h5 class="card-title fw-bold text-uppercase">${bike.name}</h5>
          <p class="card-text">$${bike.price}</p>
        </div>
      </div>`;

    row.appendChild(col);
  });
}

function updateBikeCounts() {
  const totalBikes = allProducts.length;
  const maleBikes = allProducts.filter((bike) => bike.gender === "MALE").length;
  const femaleBikes = allProducts.filter(
    (bike) => bike.gender === "FEMALE"
  ).length;

  document.querySelector("#showAll .number-bikes").textContent = totalBikes;
  document.querySelector("#male .number-bikes").textContent = maleBikes;
  document.querySelector("#female .number-bikes").textContent = femaleBikes;

  document
    .querySelectorAll(".hover-group[data-brand]")
    .forEach((brandElement) => {
      const brand = brandElement.dataset.brand;
      const brandCount = allProducts.filter(
        (bike) => bike.brand === brand
      ).length;
      brandElement.querySelector(".number-bikes").textContent = brandCount;
    });
}

function filterProducts() {
  let filteredProducts = allProducts;

  if (selectedGender !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.gender === selectedGender.toUpperCase()
    );
  }

  if (selectedBrand) {
    filteredProducts = filteredProducts.filter(
      (bike) => bike.brand === selectedBrand
    );
  }

  renderProducts(filteredProducts);

  updateActiveFilter();
}

function setDefaultActiveFilter() {
  selectedGender = "all";
  selectedBrand = null;
  updateActiveFilter();
}

function updateActiveFilter() {
  hover.forEach((group) => group.classList.remove("active-filter"));
  numberOfBikes.forEach((el) => el.classList.remove("active-number"));

  if (selectedGender === "all" && !selectedBrand) {
    btnShowAll.classList.add("active-filter");
    document
      .querySelector("#showAll .number-bikes")
      .classList.add("active-number");
  }

  if (selectedGender === "male") {
    btnMale.classList.add("active-filter");
    btnMale.querySelector(".number-bikes").classList.add("active-number");
  } else if (selectedGender === "female") {
    btnFemale.classList.add("active-filter");
    btnFemale.querySelector(".number-bikes").classList.add("active-number");
  } else {
    btnMale.classList.remove("active-filter");
    btnFemale.classList.remove("active-filter");
    btnMale.querySelector(".number-bikes").classList.remove("active-filter");
    btnFemale.querySelector(".number-bikes").classList.remove("active-number");
  }

  if (selectedBrand) {
    const selectedBrandElement = document.querySelector(
      `.hover-group[data-brand="${selectedBrand}"]`
    );
    if (selectedBrandElement) {
      selectedBrandElement.classList.add("active-filter");
      selectedBrandElement
        .querySelector(".number-bikes")
        .classList.add("active-number");
    }
  }
}

function filterProductsByBrand() {
  const brandFilters = document.querySelectorAll(".hover-group[data-brand]");
  console.log(brandFilters);
  brandFilters.forEach((filter) => {
    filter.addEventListener("click", (event) => {
      selectedBrand = event.currentTarget.dataset.brand;

      selectedGender = "all";
      filterProducts();
    });
  });
}

// Event listeners
btnShowAll.addEventListener("click", () => {
  selectedGender = "all";
  selectedBrand = null;
  renderProducts(allProducts);
  filterProducts();
});

btnMale.addEventListener("click", () => {
  selectedGender = "male";
  selectedBrand = null;
  filterProducts();
});

btnFemale.addEventListener("click", () => {
  selectedGender = "female";
  selectedBrand = null;
  filterProducts();
});

fetchData();
filterProductsByBrand();
