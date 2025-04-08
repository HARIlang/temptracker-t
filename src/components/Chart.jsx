import { useEffect, useState } from "react";

import sun from "/sun.png";

import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import GaugeComponent from "react-gauge-component";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WindRadarChart from "./WindRadarChart";

import MapView from "./MapView";

function Chart({windDeg,windGust,wind,city,setcity,temp, pressure, humidity, Handle, lat,lon , getCurrentLocation}) {
  
  return (
    <>
      <div className="container">
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && Handle()}
          placeholder="enter the city name"
        />
        <button onClick={Handle}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button onClick={getCurrentLocation }>glocation</button>
        {/* <button onClick={getCurrentLocation}>geolocation</button> */}

        <div className="box">
          <div>
            {" "}
            <GaugeComponent
              className="gauge"
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
                    onClick: () =>
                      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
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
            />{" "}
            <h3 className="label">temprature</h3>
          </div>

          <div>
            {" "}
            <GaugeComponent
              className="wind_speed_gauge"
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  {
                    limit: 10,
                    color: "#91b2e8",
                    showTick: true,
                    tooltip: { text: "Calm wind" },
                  },
                  {
                    limit: 30,
                    color: "aqua",
                    showTick: true,
                    tooltip: { text: "Light breeze" },
                  },
                  {
                    limit: 60,
                    color: "#5BE12C",
                    showTick: true,
                    tooltip: { text: "Moderate wind" },
                  },
                  {
                    limit: 100,
                    color: "#F5CD19",
                    showTick: true,
                    tooltip: { text: "Strong wind" },
                  },
                  {
                    color: "tomato",
                    tooltip: { text: "Severe wind!" },
                  },
                ],
              }}
              pointer={{
                limit: 150,
                color: "white",
                length: 0.67,
                width: 5,
              }}
              labels={{
                valueLabel: { formatTextValue: (value) => value + " km/h" },
                tickLabels: {
                  type: "outer",
                  defaultTickValueConfig: {
                    formatTextValue: (value) => value + " km/h",
                    style: { fontSize: 10 },
                  },
                  ticks: [
                    { value: 0 },
                    { value: 50 },
                    { value: 100 },
                    { value: 150 },
                  ],
                },
              }}
              value={wind}
              minValue={0}
              maxValue={150}
            />
            <h3>wind-speed</h3>
          </div>
          <div>
            <GaugeComponent
              className="pressure_gauge"
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  {
                    limit: 14.7, 
                    color: "#91b2e8",
                    showTick: true,
                    tooltip: { text: "Low Pressure" },
                  },
                  {
                    limit: 15.5, 
                    color: "aqua",
                    showTick: true,
                    tooltip: { text: "Normal Pressure" },
                  },
                  {
                    limit: 16.5, 
                    color: "#5BE12C",
                    showTick: true,
                    tooltip: { text: "High Pressure" },
                  },
                  {
                    color: "tomato",
                    tooltip: { text: "Very High Pressure!" },
                  },
                ],
              }}
              pointer={{
                color: "white",
                length: 0.67,
                width: 5,
              }}
              labels={{
                valueLabel: { formatTextValue: (value) => value + " PSI" },
                tickLabels: {
                  type: "outer",
                  defaultTickValueConfig: {
                    formatTextValue: (value) => value + " PSI",
                    style: { fontSize: 10 },
                  },
                  ticks: [
                    { value: 14 }, 
                    { value: 15 },
                    { value: 16 },
                  ],
                },
              }}
              value={pressure} 
              minValue={13}
              maxValue={17}
            />
            <h3>pressure psi</h3>
          </div>
          <div>
            <GaugeComponent
              className="humidity_gauge"
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  {
                    limit: 30,
                    color: "tomato",
                    showTick: true,
                    tooltip: { text: "Low Humidity" },
                  },
                  {
                    limit: 50,
                    color: "aqua",
                    showTick: true,
                    tooltip: { text: "Comfortable" },
                  },
                  {
                    limit: 70,
                    color: "#5BE12C",
                    showTick: true,
                    tooltip: { text: "Moderate Humidity" },
                  },
                  {
                    color: "#91b2e8",
                    tooltip: { text: "High Humidity!" },
                  },
                ],
              }}
              pointer={{
                color: "white",
                length: 0.67,
                width: 5,
              }}
              labels={{
                valueLabel: { formatTextValue: (value) => value + "%" },
                tickLabels: {
                  type: "outer",
                  defaultTickValueConfig: {
                    formatTextValue: (value) => value + "%",
                    style: { fontSize: 10 },
                  },
                  ticks: [
                    { value: 20 },
                    { value: 40 },
                    { value: 60 },
                    { value: 80 },
                  ],
                },
              }}
              value={humidity}
              minValue={0}
              maxValue={100}
            />
            <h3>Humidity Level</h3>
          </div>
          <div>
            <WindRadarChart
              windSpeed={wind}
              windGust={windGust}
              windDirection={windDeg}
            />
          </div>
        </div>
        <div className="map">
          <MapView lat={lat} lon={lon} />
        </div>
      </div>
    </>
  );
}

export default Chart;
