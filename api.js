function weather() {
    const weatherDiv = document.getElementById('weather') //Grabbing element from the HTML file
    weatherDiv.textContent = "Fetching weather data..." //Initial textcontent displayed before API fetches weather
    navigator.geolocation.getCurrentPosition((position) => { //Using the geolocation API to get the user's current location coordinates
        const { latitude, longitude } = position.coords // Const variable with "latitude, longitude" for grabbing coordinates from geolocation
        const apiKey = '0ed9c1b4d5a046fd874223501252911' //Key supplied by the API for data fetching
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}` //API link for taking API key and grabbing longitude, latitude coordinates

        fetch(url) //Making a request to the weather API using the constructed URL
        .then(response => {
            if (!response.ok) {    
                throw new Error('Unable to fetch weather data') //This will error informing us that the API was not able to fetch data
            }
            return response.json()
        })
        .then(data => {

            display(data)
         })
            .catch(error => {
                document.getElementById('weather').textContent = 'Error: ' + error.message //If an error occurs during the fetch, an error message will be displayed on the page
            })
    })
}

function display(data) {
    const weatherDiv = document.getElementById('weather') //Grabbing element from the HTML file
    weatherDiv.innerHTML = `
        <h2>${data.location.name}, ${data.location.region}</h2>
        <p>${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
        <p>Current Temperature: ${data.current.temp_c}°C</p>
        <p>Fahrenheit: ${data.current.temp_f}°F</p>
        <p>Feels like: ${data.current.feelslike_c}°C</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_mph}km/h</p>
        `
} //Displaying weather data using the properties provided by the API in the 'weather' element

document.addEventListener('DOMContentLoaded', weather) //This event will fire when the document has been completely loaded