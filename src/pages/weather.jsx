// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Weather() {
//   const { city } = useParams();
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_KEY = import.meta.env.VITE_WEATHER_KEY;

//   useEffect(() => {
//     async function fetchWeather() {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()},PK&appid=${API_KEY}&units=metric`

//         );
//         const data = await res.json();
//         console.log(data);
//         if (data.cod !== 200) {
//           setError(data.message);
//           setWeather(null);
//         } else {
//           setWeather(data);
//         }
//       } catch (err) {
//         setError("Failed to fetch weather data");
//       }
//       setLoading(false);
//     }
//     fetchWeather();
//   }, [city, API_KEY]);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

//   return (
//     <div className="weather-card">
//       <h1>Weather in {city.toUpperCase()}</h1>
//       <p>Temperature: {weather.main.temp} °C</p>
//       <p>Feels Like: {weather.main.feels_like} °C</p>
//       <p>Humidity: {weather.main.humidity}%</p>
//       <p>Condition: {weather.weather[0].description}</p>
//     </div>
//   );
// }