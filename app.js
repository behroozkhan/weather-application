//------- Get the location input, submit button, and weather data elements---------////
const locationInput = document.querySelectorAll("#location")[0];
const submit = document.querySelectorAll(".submit")[0];
const windSpeed = document.querySelectorAll("#wind")[0];
const cloud = document.querySelectorAll("#cloud")[0];
const humidity = document.querySelectorAll("#humidity")[0];
const temperature = document.querySelectorAll("#temprature")[0];
const country = document.querySelectorAll("#country")[0];
const cityName = document.querySelectorAll("#city")[0];

//-------------------- Initialize userLocation variable  ---------------------------//
let userLocation;

//-------------------- Get the date element and set the current date ---------------//
const renderDate = document.querySelectorAll("#date")[0];
renderDate.innerHTML = moment().format("MMM Do YYYY");

//-------------------- Add event listener to the submit button  --------------------//
submit.addEventListener("click", () => {
  // Get the user's location from the input field
  userLocation = locationInput.value;
  // Call the weatherData function with the user's location
  weatherData(userLocation);
});

// -------------------- Function to fetch weather data from the API -----------------//
let weatherData = (location) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      // Update the weather data elements with the fetched data
      windSpeed.innerHTML = `${res.wind.speed} km/Hr`;
      cloud.innerHTML = `${res.clouds.all}%`;
      humidity.innerHTML = `${res.main.humidity}%`;
      temperature.innerHTML = `${Math.round(res.main.temp)}°`;
      country.innerHTML = `${res.sys.country}`;
      cityName.innerHTML = `${res.name}`;
    })
    .catch((err) => {
      console.log("err==>", err);
    });
};

//-------------------- Call the weatherData function with a default location (e.g., "karachi")  --------//
weatherData("karachi");

//-------------------- Get the hamburger icon and menu content elements ----------------------//
let hamburgerIcon = document.querySelector(".toogle-menu");
let menuContent = document.querySelector("#menu-content");

//------------- Add event listener to the hamburger icon for toggling the menu content  ----------//
hamburgerIcon.addEventListener("click", () => {
  menuContent.style.display = 'block'
  hamburgerIcon.style.display = 'block'
  menuContent.classList.toggle("show");
});
