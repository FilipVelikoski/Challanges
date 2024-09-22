const weatherData = [
  { city: "New York", temperature: 16, humidity: 70, windSpeed: 7 },
  { city: "London", temperature: 12, humidity: 80, windSpeed: 5 },
  { city: "Tokyo", temperature: 22, humidity: 60, windSpeed: 4 },
  { city: "Sydney", temperature: 25, humidity: 50, windSpeed: 6 },
  { city: "Paris", temperature: 15, humidity: 65, windSpeed: 5 },
  { city: "Berlin", temperature: 14, humidity: 60, windSpeed: 6 },
  { city: "Moscow", temperature: 5, humidity: 75, windSpeed: 10 },
  { city: "Toronto", temperature: 17, humidity: 55, windSpeed: 8 },
  { city: "Rio de Janeiro", temperature: 26, humidity: 85, windSpeed: 7 },
  { city: "Beijing", temperature: 20, humidity: 40, windSpeed: 3 },
  { city: "Mumbai", temperature: 30, humidity: 70, windSpeed: 5 },
  { city: "Los Angeles", temperature: 19, humidity: 65, windSpeed: 4 },
  { city: "Cape Town", temperature: 18, humidity: 60, windSpeed: 6 },
  { city: "Rome", temperature: 21, humidity: 55, windSpeed: 3 },
  { city: "Bangkok", temperature: 33, humidity: 75, windSpeed: 2 },
  { city: "Istanbul", temperature: 20, humidity: 60, windSpeed: 4 },
  { city: "Lagos", temperature: 29, humidity: 80, windSpeed: 3 },
  { city: "Buenos Aires", temperature: 23, humidity: 70, windSpeed: 5 },
  { city: "Chicago", temperature: 10, humidity: 65, windSpeed: 7 },
  { city: "Shanghai", temperature: 19, humidity: 80, windSpeed: 6 },
];
// Select elements
const searchCity = document.querySelector("#cityName");
const weatherDisplay = document.querySelector("#weatherDisplay");
const forecastDisplay = document.querySelector("#forecastDisplay");
const recentSearches = document.querySelector("#recentSearches");

// Exercise 01
function fetchWeather(city) {
  const capitalCity = city.toLowerCase();
  return weatherData.find((data) =>
    data.city.toLowerCase().includes(capitalCity)
  );
}

function displayCurrentWeather(data) {
  if (data) {
    weatherDisplay.innerHTML = `
          <h2>Current Weather for  ${data.city}</h2>
          <p>Temperature: ${data.temperature}°C</p>
          <p>Humidity: ${data.humidity}%</p>
          <p>Wind Speed: ${data.windSpeed} m/s</p>
          <h2>5-day Forcast for ${data.city}</h2>
        `;
  } else {
    alert("City not found");
  }
}

// Exercise 02
function fetchForecast(city) {
  const weather = fetchWeather(city);
  if (weather) {
    const forecast = [];
    let currentTemp = weather.temperature;

    for (let i = 1; i <= 5; i++) {
      forecast.push({
        day: `Day: ${i}`,
        temperature: `Temperature: ${currentTemp + i}`,
      });
    }
    return forecast;
  } else {
    return null;
  }
}

function displayForecast(data) {
  if (data) {
    forecastDisplay.innerHTML = data
      .map((day) => `<p>${day.day}: ${day.temperature}°C</p>`)
      .join("");
  } else {
    alert("City not found for forecast");
  }
}

function searchWeather() {
  const searchValue = searchCity.value;
  const data = fetchWeather(searchValue);
  displayCurrentWeather(data);

  const forecast = fetchForecast(searchValue);
  searchCity.value = "";
  saveRecentSearch(searchValue);
  displayForecast(forecast);
  displayRecentSearches();
}

// Exercise 03: Save recent searches to local storage
function saveRecentSearch(city) {
  let recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  if (!recentSearch.includes(city)) {
    recentSearch.push(city);

    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  }
}
function displayRecentSearches() {
  let recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  if (recentSearch.length > 0) {
    recentSearches.innerHTML = recentSearch
      .map((city) => `<p class="card p-3 recentSearch" >${city}</p>`)
      .join(" ");
  }

  document.querySelectorAll(".recentSearch").forEach((cityElement) => {
    cityElement.style.cursor = "pointer";
    cityElement.addEventListener("click", () => {
      searchCity.value = cityElement.textContent;
      searchWeather();
    });
  });
}

displayRecentSearches();
