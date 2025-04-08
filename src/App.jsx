import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [temp, settemp] = useState("");
  const [status, setstatus] = useState("");
  const [icon, seticon] = useState("");
  const [max, setmax] = useState("");
  const [min, setmin] = useState("");
  const [humidity, sethumidity] = useState("");
  const [wind, setwind] = useState("");
  const [pressure, setpressure] = useState("");
  const [sea, setsea] = useState("");
  const API_KEY = "77dd833218dc75b351c43c7da27abb81";
  const Temprature = { temp } + "c";
  const [windDeg, setWindDeg] = useState("");
  const [windGust, setWindGust] = useState("");
  const [error,seterror]=useState("");
  

  async function Handle() {
    try {
      if (!city) {
        alert("Enter the city name");
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod === "404") {
        
        alert("Enter a valid city name");
       
      
        return;
      }

      console.log(data)
     
      setlon(data.coord.lon);
      setlat(data.coord.lat);
      setcity(data.name);
      setcountry(data.sys.country);
      settemp((data.main.temp - 273.15).toFixed(2));
      setstatus(data.weather[0].description);
      setmax((data.main.temp_max - 273.15).toFixed(2));
      setmin((data.main.temp_min - 273.15).toFixed(2));
      sethumidity(data.main.humidity);
      setwind((data.wind.speed * 3.6).toFixed(2));

      setpressure((data.main.pressure * 0.0145038).toFixed(2));

      setsea((data.main.sea_level / 1013.25).toFixed(4));
      setWindDeg(data.wind.deg);
      setWindGust(data.wind.gust);

      seticon(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // useEffect(() => {
  //   Handle(); 
  // }, []);
  
  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      const watcher = navigator.geolocation.watchPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setlat(latitude.toFixed(6));
          setlon(longitude.toFixed(6));
  
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const data = await response.json();
  
          
            setcity(data.name);
            setcountry(data.sys.country);
            settemp((data.main.temp - 273.15).toFixed(2));
            setstatus(data.weather[0].description);
            setmax((data.main.temp_max - 273.15).toFixed(2));
            setmin((data.main.temp_min - 273.15).toFixed(2));
            sethumidity(data.main.humidity);
            setwind((data.wind.speed * 3.6).toFixed(2));
            setpressure((data.main.pressure * 0.0145038).toFixed(2));
            setsea((data.main.sea_level / 1013.25).toFixed(4));
            seticon(
              `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            );
  
            
            navigator.geolocation.clearWatch(watcher);
          } catch (error) {
            console.error("Error fetching location data:", error);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Error getting location. Please enable location services.");
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  
  };
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Weather
                setcity={setcity}
                city={city}
                Handle={Handle}
                lon={lon}
                lat={lat}
                country={country}
                temp={temp}
                status={status}
                max={max}
                min={min}
                humidity={humidity}
                wind={wind}
                pressure={pressure}
                sea={sea}
                icon={icon}
                getCurrentLocation = {getCurrentLocation}
                error ={error}
                
              />
            }
          />
          <Route
            path="/chart"
            element={
              <Chart
                city={city}
                setcity={setcity}
                Handle={Handle}
                lat={lat}
                lon={lon}
                temp={temp}
                wind={wind}
                humidity={humidity}
                pressure={pressure}
                windDeg={windDeg}
                windGust={windGust}
                getCurrentLocation = {getCurrentLocation}
               
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
