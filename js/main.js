let formElement = document.querySelector(".form")

formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputValue = document.querySelector(".search-input").value;
    let weatherData = await fetchData(inputValue)

    console.log(weatherData)
    let jsonWeatherData = document.querySelector(".json")

    let html = ` <p> Celsius: ${location.current.temp_c} </p>
                <p> Celsius: ${location.current.temp_f} </p>
`
    jsonWeatherData.insertAdjacentHTML("afterbegin", html)

})

//
const api = {
    url: 'https://api.weatherapi.com/v1/current.json?key',
    key: '7e3a305ab0de4f649f003625202606'
};

const fetchData = async (query) => {
    try {
        let response = await fetch(`${api.url}=${api.key}&q=${query}`)
        let weatherData = await response.json();
        return weatherData
    } catch (error) {
        console.log(error)
    }

}