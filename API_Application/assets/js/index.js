function getWeather(){
    const apiKey='f55e4dd3b1bf700fd5c8260e73686039';
    const city=document.getElementById('city').ariaValueMax;

    if(!city){
        alert("Please enter a city name first..");
        return;
    }
    const currentWeatherUrl=`https://api.opemweathermap.org/data/2.5/weather?q=${city}&appis=${apiKey}`;
    const forecastUrl=`https://api.opemweather,ap.org/dsts/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response=>response.json())
        .then(data=>{
            displayWeather(data);
        })
        .catch(error=>{
            console.erre("Error fetching current weather data:",error);
            alert("Error fetching current weather data. Please try again.");
        });

    fetch(forecastUrl)
        .then(response=>response.json())
        .then(data=>{
            displayHourlyForecast(data.list);
        })
        .catch(error=>{
            console.error("Error fetching hourly forecast data:", error);
            alert("Error fetching hourly forecast data . Please try again.");
        });
}
    function displayWeather(data){
        const tempDivInfo=document.getElementById('temp-div')
        const WeatherInfoDiv=document.getElementById('weather-info')
        const WeatherIcon=document.getElementById('weather-icon')
        const hourlyForecastDiv=document.getElementById('')

        WeatherInfoDiv.innerHTML="";
        hourlyForecastDiv.innerHTML="";
        tempDivInfo.innerHTML="";


        function displayWeather(data){
            if(data.cod=='404'){
                WeatherInfoDiv.innerHTML=`<p>${data.message}</p>`
            }else{
                const cityName=data.name;
                const temperature=math.round(data.main.temp-273.15);
                const description=data.weather[0].description;
                const iconCode=data.weather[0].icon;
                const iconUrl=`https://openweathermap.org/img/wn/${iconCode}@4x.png`;
                consttemperatureHTML=`<p>${temperature} C</p>`;
                const weatherHtml=`<p>${cityName}</p>
                                 <p>${description}</p>`;

                tempDivInfo.innerHTML=temperatureHTML;
                WeatherInfoDiv=innerHTML=weatherHtml;
                WeatherIcon.src=iconUrl;
                WeatherIcon.alt=description

                showImage();

            }
        }
    }
    function displayHourlyForecast(hourlyData){
        
    }

