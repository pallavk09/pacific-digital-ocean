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

const ActualVsNoonPower = () => {
  const ActualPower = [
    { power: 8000 },
    { power: 8222 },
    { power: 8977 },
    { power: 8100 },
    { power: 8098 },
    { power: 8076 },
    { power: 8700 },
    { power: 8600 },
    { power: 8600 },
    { power: 8900 },
    { power: 8900 },
    { power: 8900 },
    { power: 8222 },
    { power: 8977 },
    { power: 8900 },
    { power: 8900 },
    { power: 8900 },
    { power: 8977 },
    { power: 8100 },
    { power: 8900 },
    { power: 8222 },
    { power: 8977 },
    { power: 8900 },
  ];

  const NoonPower = [
    { power: 8000 },
    { power: 8100 },
    { power: 8200 },
    { power: 8300 },
    { power: 8400 },
    { power: 8500 },
    { power: 8600 },
    { power: 8700 },
    { power: 8800 },
    { power: 8900 },
    { power: 8000 },
    { power: 8100 },
    { power: 8200 },
    { power: 8300 },
    { power: 8400 },
    { power: 8500 },
    { power: 8600 },
    { power: 8700 },
    { power: 8800 },
    { power: 8900 },
    { power: 8000 },
    { power: 8100 },
    { power: 8200 },
    { power: 8300 },
    { power: 8400 },
  ];

  const combinedReportData = ActualPower.map((point, index) => ({
    powerActual: point.power,
    powerNoon: NoonPower[index]?.power || null,
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
          dataKey="powerActual"
          label={{ value: "Power (Kw)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const { powerActual, powerNoon } = payload[0].payload;
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
                    <strong>Power Actual (Kw)</strong>: {powerActual}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Power Noon (Kw)</strong>: {powerNoon}
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
          dataKey="powerActual"
          stroke="#47577b"
          strokeWidth={2}
          name="Power (Kw)"
        />
        <Line
          type="monotone"
          dataKey="powerNoon"
          stroke="#e6697f"
          strokeWidth={2}
          name="Noon Power (Kw)"
        />
      </LineChart>
    </ResponsiveContainer>
    // </Box>
  );
};

export default ActualVsNoonPower;
