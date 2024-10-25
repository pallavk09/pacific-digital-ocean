import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  useMap,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import ResetViewControl from "@20tab/react-leaflet-resetview";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import { url } from "inspector";

// Define custom vessel icon
const vesselIcon = new L.Icon({
  iconUrl: "/img/icons/ship1.png", // Replace with the actual path to your vessel icon
  iconSize: [32, 32], // Adjust size as needed
  iconAnchor: [16, 16], // Center the icon over the point
});

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
  const [startLat, startLng] = plannedRoute[0] as [number, number];
  const initialPosition: LatLngExpression = [
    startLat - 2,
    startLng + 8,
  ] as LatLngExpression;
  const initialZoom = 6;

  // const [vesselPosition, setVesselPosition] = useState<LatLngExpression>(
  //   plannedRoute[0]
  // );
  // const [currentIndex, setCurrentIndex] = useState(0);

  // // Function to interpolate between two points
  // const interpolate = (
  //   start: LatLngExpression,
  //   end: LatLngExpression,
  //   t: number
  // ) => {
  //   const [startLat, startLng] = start as [number, number];
  //   const [endLat, endLng] = end as [number, number];
  //   const lat = startLat + (endLat - startLat) * t;
  //   const lng = startLng + (endLng - startLng) * t;
  //   return [lat, lng] as LatLngExpression;
  // };

  // useEffect(() => {
  //   if (currentIndex >= plannedRoute.length - 1) return;

  //   let t = 0;
  //   const animationStep = 0.0005; // Further reduced for slower movement

  //   const animate = () => {
  //     if (t < 1) {
  //       setVesselPosition(
  //         interpolate(
  //           plannedRoute[currentIndex],
  //           plannedRoute[currentIndex + 1],
  //           t
  //         )
  //       );
  //       t += animationStep;
  //       setTimeout(() => requestAnimationFrame(animate), 50); // Delay between frames
  //     } else {
  //       setCurrentIndex((prev) => prev + 1); // Move to the next route segment
  //     }
  //   };

  //   animate(); // Start animation on each segment change

  // }, [currentIndex, plannedRoute]);

  return (
    <MapContainer style={{ height: "600px", width: "100%" }}>
      <SetMapView center={initialPosition} zoom={initialZoom} />
      <ResetViewControl title="Reset view" icon="url(/img/icons/refresh.png)" />
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

      {/* Vessel Icon moving along the actual route */}
      {actualRoute.length > 0 && (
        <Marker
          position={actualRoute[actualRoute.length - 1]}
          icon={vesselIcon}
        />
      )}
    </MapContainer>
  );
};

export default VesselMap;
