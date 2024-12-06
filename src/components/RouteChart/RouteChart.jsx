import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography, Box } from "@mui/material";

const RouteChart = () => {
  const plannedRouteData = [
    { name: "Point A", lat: 12.0, lon: 45.0, distance: 0 },
    { name: "Point B", lat: 13.5, lon: 46.5, distance: 50 },
    { name: "Point C", lat: 15.0, lon: 48.0, distance: 100 },
    { name: "Point D", lat: 16.5, lon: 49.5, distance: 150 },
    { name: "Point E", lat: 18.0, lon: 51.0, distance: 200 },
  ];

  const actualRouteData = [
    { name: "Point A", lat: 12.0, lon: 45.0, distance: 0 },
    { name: "Point X", lat: 14.0, lon: 46.0, distance: 50 },
    { name: "Point Y", lat: 16.0, lon: 47.5, distance: 100 },
    { name: "Point Z", lat: 17.5, lon: 49.0, distance: 150 },
    { name: "Point E", lat: 18.5, lon: 50.5, distance: 200 },
  ];

  const combinedData = plannedRouteData.map((point, index) => ({
    distance: point.distance,
    plannedLat: point.lat,
    plannedLon: point.lon,
    plannedLocation: point.name,
    actualLat: actualRouteData[index]?.lat || null,
    actualLon: actualRouteData[index]?.lon || null,
    actualLocation: actualRouteData[index]?.name || null,
  }));

  return (
    // <Box>
    //   <Typography variant="h6" gutterBottom>
    //     Vessel Route Analysis
    //   </Typography>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={combinedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="distance"
          label={{
            value: "Distance (NM)",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          label={{ value: "Latitude", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const {
                plannedLocation,
                plannedLat,
                plannedLon,
                actualLocation,
                actualLat,
                actualLon,
              } = payload[0].payload;
              return (
                <Box
                  p={1}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: 5,
                  }}
                >
                  <Typography variant="body2">
                    <strong>Planned Route</strong>
                  </Typography>
                  <Typography variant="body2">
                    Location: {plannedLocation}
                  </Typography>
                  <Typography variant="body2">
                    Lat: {plannedLat}, Lon: {plannedLon}
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    <strong>Actual Route</strong>
                  </Typography>
                  <Typography variant="body2">
                    Location: {actualLocation}
                  </Typography>
                  <Typography variant="body2">
                    Lat: {actualLat}, Lon: {actualLon}
                  </Typography>
                </Box>
              );
            }
            return null;
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="plannedLat"
          stroke="#8884d8"
          name="Planned Route"
        />
        <Line
          type="monotone"
          dataKey="actualLat"
          stroke="#82ca9d"
          name="Actual Route"
        />
      </LineChart>
    </ResponsiveContainer>
    // </Box>
  );
};

export default RouteChart;
