const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

// Selectors
const imageDisplay = document.querySelector("#imageDisplay");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");

let currentImageIndex = 0;

// functions
function displayImage() {
  imageDisplay.src = images[currentImageIndex];
  prevButton.disabled = currentImageIndex === 0;
  nextButton.disabled = currentImageIndex === images.length - 1;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayImage();
}

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  displayImage();
}

// events
nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPreviousImage);
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    showNextImage();
  } else if (event.key === "ArrowLeft") {
    showPreviousImage();
  }
});

displayImage();
