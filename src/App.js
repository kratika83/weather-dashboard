import SearchBar from './components/SearchBar';
import { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const fetchWeather = async (city) => {
    if (!city) {
      alert('Please Enter City');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.log('Error fetching weather data', error);
      alert("Failed to fetch weather data. Please try again.");
    }
  };
  return (
    <div >
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div >
  );
}

export default App;