const WeatherDisplay = ({ data }) => {
    return (
        <div>
            <h2>Weather in {data.name}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Description: {data.weather[0].description}</p>
        </div>
    )
}

export default WeatherDisplay
