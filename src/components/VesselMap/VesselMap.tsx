import React, { useEffect } from "react";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

interface RouteProps {
  plannedRoute: Array<[number, number]>;
  actualRoute: Array<[number, number]>;
}

const SetMapView: React.FC<{ center: LatLngExpression; zoom: number }> = ({
  center,
  zoom,
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
};

const VesselMap: React.FC<RouteProps> = ({ plannedRoute, actualRoute }) => {
  const initialPosition: LatLngExpression = plannedRoute[0];
  const initialZoom = 6; // Set your desired zoom level here

  return (
    <MapContainer style={{ height: "400px", width: "100%" }}>
      <SetMapView center={initialPosition} zoom={initialZoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Planned Route - Dotted line */}
      <Polyline
        positions={plannedRoute}
        pathOptions={{ color: "blue", dashArray: "10, 10" }}
      />
      {/* Actual Route - Solid line */}
      <Polyline positions={actualRoute} pathOptions={{ color: "green" }} />
    </MapContainer>
  );
};

export default VesselMap;
