
const apiKey="0b9059b6d0daece6e93ac52fda69be88";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weather_icon= document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/H";
    const weatherMain = data.weather[0].main.trim();
    switch (weatherMain) {
        case 'Clear':
            weather_icon.src = "images/clear.png";
            break;
        case "Clouds":
            weather_icon.src = "images/clouds.png";
            break;
        case "Rain":
            weather_icon.src = "images/rain.png";
            break;
        case "Drizzle":
            weather_icon.src = "images/drizzle.png";
            break;
        case "Mist":
            weather_icon.src = "images/mist.png";
            break;
        default:
            // Set a default image or handle other cases
            break;
    }
}




searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
checkWeather();
