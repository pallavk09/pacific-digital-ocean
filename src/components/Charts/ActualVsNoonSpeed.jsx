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

const ActualVsNoonSpeed = () => {
  const ActualSpeed = [
    { speed: 10 },
    { speed: 10.5 },
    { speed: 11 },
    { speed: 11.5 },
    { speed: 12 },
    { speed: 10 },
    { speed: 10.5 },
    { speed: 11 },
    { speed: 11.5 },
    { speed: 12 },
    { speed: 10 },
    { speed: 10.5 },
    { speed: 11 },
    { speed: 11.5 },
    { speed: 12 },
    { speed: 10 },
    { speed: 10.5 },
    { speed: 11 },
    { speed: 11.5 },
    { speed: 12 },
    { speed: 10 },
    { speed: 10.5 },
    { speed: 11 },
    { speed: 11.5 },
  ];

  const NoonSpeed = [
    { speed: 9 },
    { speed: 9 },
    { speed: 10 },
    { speed: 11 },
    { speed: 12 },
    { speed: 11 },
    { speed: 11 },
    { speed: 12 },
    { speed: 12 },
    { speed: 12 },
    { speed: 12 },
    { speed: 11 },
    { speed: 11 },
    { speed: 11 },
    { speed: 11 },
    { speed: 9 },
    { speed: 9 },
    { speed: 9 },
    { speed: 9 },
    { speed: 9 },
    { speed: 9 },
    { speed: 12 },
    { speed: 12 },
    { speed: 12 },
  ];

  const combinedReportData = ActualSpeed.map((point, index) => ({
    speedActual: point.speed,
    SpeedNoon: NoonSpeed[index]?.speed || null,
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
          dataKey="speedActual"
          label={{ value: "Speed (Knots)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const { speedActual, SpeedNoon } = payload[0].payload;
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
                    <strong>Speed Actual (Knots)</strong>: {speedActual}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Speed Noon (Knots)</strong>: {SpeedNoon}
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
          dataKey="speedActual"
          stroke="#47577b"
          strokeWidth={2}
          name="Speed (Knots)"
        />
        <Line
          type="monotone"
          dataKey="SpeedNoon"
          stroke="#e6697f"
          strokeWidth={2}
          name="Noon Speed (Knots)"
        />
      </LineChart>
    </ResponsiveContainer>
    // </Box>
  );
};

export default ActualVsNoonSpeed;
