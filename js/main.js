let formElement = document.querySelector(".form")
// https://curpraweather.vercel.app/
formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputValue = document.querySelector(".search-input").value;
    try {
        //Creating URL
        const url = `../.netlify/functions/fetch?query=${inputValue}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        let jsonWeatherData = document.querySelector(".json")

        let html = ` <p> Celsius: ${data.weatherData.current.temp_c} </p>
                <p> Fahrenheit.: ${data.weatherData.current.temp_f} </p>`

        if (jsonWeatherData.children.length) {
            jsonWeatherData.removeChild(jsonWeatherData.childNodes)
        }
        else {
            jsonWeatherData.insertAdjacentHTML("afterbegin", html)
        }


    } catch (error) {
        console.log(error)
        alert(error ? error : "Check your internet connection.")
    }


})


// const api = {
//     url: 'https://api.weatherapi.com/v1/current.json?key',
//     key: '7e3a305ab0de4f649f003625202606'
// };


