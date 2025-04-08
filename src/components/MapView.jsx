import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const MapView = ({ lat, lon }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;


    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [lon, lat], 
        zoom: 10,
        projection: "EPSG:4326",
      }),
    });

    return () => map.setTarget(null); 
  }, [lat, lon]);

  return <div ref={mapRef} style={{ width: "100%", height: "170px" }} />;
};

export default MapView;