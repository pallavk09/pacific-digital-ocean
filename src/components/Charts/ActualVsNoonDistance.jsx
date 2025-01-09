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
import { useEffect } from "react";

const ActualVsNoonDistance = () => {
  const ActualDatance = [
    { distance: 230 },
    { distance: 250 },
    { distance: 242 },
    { distance: 252 },
    { distance: 242 },
    { distance: 245 },
    { distance: 242 },
    { distance: 245 },
    { distance: 234 },
    { distance: 265 },
    { distance: 245 },
    { distance: 276 },
    { distance: 245 },
    { distance: 276 },
    { distance: 256 },
    { distance: 276 },
    { distance: 298 },
    { distance: 234 },
    { distance: 254 },
    { distance: 243 },
    { distance: 223 },
    { distance: 214 },
    { distance: 254 },
    { distance: 235 },
    { distance: 265 },
  ];

  const NoonDatance = [
    { distance: 240 },
    { distance: 245 },
    { distance: 250 },
    { distance: 255 },
    { distance: 260 },
    { distance: 265 },
    { distance: 270 },
    { distance: 275 },
    { distance: 280 },
    { distance: 285 },
    { distance: 240 },
    { distance: 245 },
    { distance: 250 },
    { distance: 255 },
    { distance: 260 },
    { distance: 265 },
    { distance: 270 },
    { distance: 275 },
    { distance: 280 },
    { distance: 285 },
    { distance: 240 },
    { distance: 245 },
    { distance: 250 },
    { distance: 255 },
    { distance: 260 },
  ];

  const combinedReportData = ActualDatance.map((point, index) => ({
    distanceActual: point.distance,
    distanceNoon: NoonDatance[index]?.distance || null,
  }));

  return (
    <ResponsiveContainer width="100%" height={350} style={{ padding: 1 }}>
      <LineChart data={combinedReportData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          label={{
            value: "Time",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          dataKey="distanceActual"
          label={{ value: "Distance (NM)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const { distanceActual, distanceNoon } = payload[0].payload;
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
                    <strong>Dist Actual (Nm)</strong>: {distanceActual}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Dist Noon (Nm)</strong>: {distanceNoon}
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
          dataKey="distanceActual"
          stroke="#47577b"
          strokeWidth={2}
          name="Distance Run (Nm)"
        />
        <Line
          type="monotone"
          dataKey="distanceNoon"
          stroke="#e6697f"
          strokeWidth={2}
          name="Noon Distance Run (Nm)"
        />
      </LineChart>
    </ResponsiveContainer>
    // </Box>
  );
};

export default ActualVsNoonDistance;
