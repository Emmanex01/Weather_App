const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "fd70a169f00d69f7a2072eebf658d5f0";
const searchBtn = document.querySelector(".search-icon");
const weatherInfo = document.querySelector(".weather-info")
const errorMsg = document.querySelector(".error")

async function checkWeather (city) {
    try {
            const response = await fetch(apiUrl + city + "&appid=" + apiKey);
            let data = await response.json();


            let temp = document.querySelector(".temp");
            let country = document.querySelector(".country");
            let humid = document.querySelector(".humid");
            let Wind = document.querySelector(".Wind");
            let weatherImg = document.querySelector(".weatherImg")

            console.log(data);
            country.innerHTML = data.name;
            temp.innerHTML = Math.trunc(data.main.temp) + "°C";
            Wind.innerHTML = data.wind.speed + "km/hr";
            humid.innerHTML = data.main.humidity + "%";

            let weatherCondition = data.weather[0].main;

            if (weatherCondition == "Clouds") {
                weatherImg.src = "./Weather-image/weather_cloud.png"
            } else if (weatherCondition == "Rain") {
                weatherImg.src = "./Weather-image/icon-rainy-weather.jpg"
            } else if (weatherCondition == "Sunny") {
                weatherImg.src = "./Weather-image/weather_sunny.jpg"
            } else if (weatherCondition == "Mist") {
                weatherImg.src = "./Weather-image/Mistweather.jpg"
            }
            weatherInfo.style.display = "flex";
            errorMsg.style.display = "none";
    } catch (error) {
        weatherInfo.style.display = "none";
        errorMsg.style.display = "block";
        console.log(error);
    }
    

    console.log(data)
};

searchBtn.addEventListener("click", () => {
    let countryName = document.querySelector(".searchInput");
    checkWeather(countryName.value);
});