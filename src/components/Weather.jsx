import { useEffect, useState } from "react";

import sun from "/sun.png";

import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import GaugeComponent from "react-gauge-component";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { colors } from "@mui/material";

function Weather({
  lon,
  lat,
  city,
  setcity,
  country,
  temp,
  status,
  max,
  min,
  humidity,
  wind,
  pressure,
  sea,
  Handle,
  icon,
  getCurrentLocation,
  error,
}) {
  return (
    <>
      <div className="container">
        <input
          type="text"
          name="city"
          value={city}
          placeholder={error ? "incorrect data" : "enter the city name "}
          className={error ? "red " : ""}
          onChange={(e) => setcity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && Handle()}
        />
        <button onClick={Handle}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button onClick={getCurrentLocation}>glocation</button>
        <div className="side">
          <h1>{temp} °C</h1>
          <h2>{city == "incorrect data" ? "" : city}</h2>
          <span> max temp {max}</span>
          <br />
          <span>min temp {min}</span>
        </div>
        <img src={icon || sun} alt="🌬️" />

        <div className="items">
          <div>
            <h4>country</h4>
            <i class="fa-solid fa-flag"></i>
            <p>{country}</p>
          </div>
          <div>
            <h4>city</h4>
            <i class="fa-solid fa-tree-city"></i>
            <p>{city == "incorrect data" ? "" : city}</p>
          </div>
          <div>
            <h4>temprature</h4>
            <i class="fa-solid fa-temperature-three-quarters"></i>
            <p>{temp}°C</p>
          </div>
          <div>
            <h4>conditions</h4>
            <i class="fa-solid fa-cloud"></i>
            <p>{status}</p>
          </div>
          <div>
            <h4>lon</h4>

            <i class="fa-solid fa-map-pin"></i>
            <p>{lat}</p>
          </div>
          <div>
            <h4>lat</h4>
            <i class="fa-solid fa-map-pin"></i>
            <p>{lon}</p>
          </div>
        </div>
        <footer>
          <div>
            <i class="fa-solid fa-droplet"></i>
            <h2>humidity</h2>
            <p>{humidity}</p>
          </div>
          <div>
            <i class="fa-solid fa-wind"></i>
            <h2>wind </h2>
            <p>{wind}/kmh</p>
          </div>
          <div>
            <i class="fa-solid fa-weight-scale"></i>

            <h2>pressure</h2>
            <p>{pressure} psi</p>
          </div>
          <div>
            <i class="fa-solid fa-umbrella-beach"></i>
            <h2>sea level</h2>
            <p>{sea} amt</p>
          </div>
        </footer>
      </div>

      <GaugeComponent
        className="home_stack home_stack_sm"
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          // gradient: true,
          subArcs: [
            {
              limit: 15,
              color: "#91b2e8",
              showTick: true,
              tooltip: {
                text: "Too low temperature!",
              },
              onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
              onMouseMove: () =>
                console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
              onMouseLeave: () =>
                console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
            },
            {
              limit: 17,
              color: "aqua",
              showTick: true,
              tooltip: {
                text: "Low temperature!",
              },
            },
            {
              limit: 28,
              color: "#5BE12C",
              showTick: true,
              tooltip: {
                text: "OK temperature!",
              },
            },
            {
              limit: 30,
              color: "#F5CD19",
              showTick: true,
              tooltip: {
                text: "High temperature!",
              },
            },
            {
              color: "tomato",
              tooltip: {
                text: "Too high temperature!",
              },
            },
          ],
        }}
        pointer={{
          limit: 20,
          color: "white",
          length: 0.67,
          width: 5,
        }}
        labels={{
          valueLabel: { formatTextValue: (value) => value + "ºC" },
          tickLabels: {
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value) => value + "ºC",
              style: { fontSize: 10 },
            },
            ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
          },
        }}
        value={temp}
        minValue={10}
        maxValue={35}
      />
    </>
  );
}

export default Weather;
