function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");

temperatureElement.innerHTML = Math.round 
(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.main.wind.speed);

}


let apiKey = "1ac062741764d4e19635341372dd2364";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=${apiKey}&units=imperial`;


axios.get(apiUrl).then(displayTemperature);

