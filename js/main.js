let formElement = document.querySelector(".form")

formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputValue = document.querySelector(".search-input").value;
    try {
        //Creating URL
        const url = `../.netlify/functions/fetch?query=${inputValue}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)

        //Selecting div
        let jsonWeatherData = document.querySelector(".json")

        let html = ` <p> Celsius: ${data.weatherData.current.temp_c} </p>
                <p> Fahrenheit.: ${data.weatherData.current.temp_f} </p>`

        jsonWeatherData.insertAdjacentHTML("afterbegin", html)

    } catch (error) {
        console.log(error)
        alert(error ? error : "Check your internet connection.")
    }
})

