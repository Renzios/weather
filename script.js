const time = document.querySelector(".time");

function setDate() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
}

setDate();
setInterval(setDate, 1000);

const maxTemp = document.querySelector(".max-temp");
const avgTemp = document.querySelector(".avg-temp");
const minTemp = document.querySelector(".min-temp");
const humidity = document.querySelector(".humidity-value");
const dew = document.querySelector(".dew");
const precipprob = document.querySelector(".chance-of-rain");
const wind = document.querySelector(".wind");
const gust = document.querySelector(".gust");
const uvIndex = document.querySelector(".uv");
const uvCategory = document.querySelector(".uv-category");
const sunrise = document.querySelector(".sunrise-value");
const sunset = document.querySelector(".sunset-value");

async function getWeather() {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manila?unitGroup=metric&key=TCRSVJHZZZ2LFPKQQL4U4M5JP&contentType=json', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    
    const today = weatherData.days[0];

    maxTemp.textContent = today.tempmax + "°C"
    avgTemp.textContent = today.temp + "°C";
    minTemp.textContent = today.tempmin + "°C";
    humidity.textContent = today.humidity;
    dew.textContent = today.dew + "°C";
    precipprob.textContent = today.precipprob;
    wind.textContent = today.windspeed + " KPH";
    gust.textContent = today.windgust + " KPH";

    let index = today.uvindex

    uvIndex.textContent = index;
    
    if (index >= 1 && index <= 2) {
        uvCategory.textContent = "LOW";
    }
    else if (index >= 3 && index <= 5) {
        uvCategory.textContent = "MODERATE";
    }
    else if (index >= 6 && index <= 7) {
        uvCategory.textContent = "HIGH";
    }
    else if (index >= 8 && index <= 10) {
        uvCategory.textContent = "VERY HIGH";
    }
    else if (index >= 11) {
        uvCategory.textContent = "EXTREME";
    }

    sunrise.textContent = today.sunrise;
    sunset.textContent = today.sunset;
}

getWeather();

const theme = document.querySelector(".theme");
const body = document.querySelector("body")

theme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});