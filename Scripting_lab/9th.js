function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "faf6152463b07666bf7d83fdb54bf197 ";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // AJAX using fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                document.getElementById("weatherResult").innerHTML =
                    "City not found!";
            }
        })
        .catch(error => {
            console.log(error);
        });
}

function displayWeather(data) {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const condition = data.weather[0].description;

    document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${temp} °C</p>
        <p>Condition: ${condition}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${wind} m/s</p>
    `;
}