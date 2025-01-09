import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Typography, Box } from "@mui/material";

const ActualVsNoonFuelConsumption = () => {
  const ActualFuelConsumption = [
    { distance: 50 },
    { distance: 56 },
    { distance: 56 },
    { distance: 54 },
    { distance: 53 },
    { distance: 57 },
    { distance: 53 },
    { distance: 67 },
    { distance: 50 },
    { distance: 56 },
    { distance: 56 },
    { distance: 54 },
    { distance: 53 },
    { distance: 57 },
    { distance: 53 },
    { distance: 57 },
    { distance: 53 },
    { distance: 59 },
    { distance: 50 },
    { distance: 53 },
    { distance: 57 },
    { distance: 53 },
    { distance: 56 },
    { distance: 56 },
    { distance: 54 },
  ];

  const NoonFuelConsumption = [
    { distance: 50 },
    { distance: 52.5 },
    { distance: 55 },
    { distance: 57.5 },
    { distance: 60 },
    { distance: 62.5 },
    { distance: 50 },
    { distance: 52.5 },
    { distance: 55 },
    { distance: 57.5 },
    { distance: 60 },
    { distance: 62.5 },
    { distance: 50 },
    { distance: 52.5 },
    { distance: 55 },
    { distance: 57.5 },
    { distance: 60 },
    { distance: 62.5 },
    { distance: 50 },
    { distance: 52.5 },
    { distance: 55 },
    { distance: 57.5 },
    { distance: 60 },
    { distance: 62.5 },
  ];

  const combinedReportData = ActualFuelConsumption.map((point, index) => ({
    fuelConsumptionActual: point.distance,
    fuelConsumptionNoon: NoonFuelConsumption[index]?.distance || null,
  }));

  return (
    <ResponsiveContainer width="100%" height={350} style={{ padding: 1 }}>
      <BarChart data={combinedReportData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          label={{
            value: "Time",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          dataKey="fuelConsumptionActual"
          label={{
            value: "Fuel Consumption (MT)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const { fuelConsumptionActual, fuelConsumptionNoon } =
                payload[0].payload;
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
                    <strong>Fuel Consumption Actual (MT)</strong>:
                    {fuelConsumptionActual}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Fuel Consumption Noon (MT)</strong>:
                    {fuelConsumptionNoon}
                  </Typography>
                </Box>
              );
            }
            return null;
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar
          dataKey="fuelConsumptionActual"
          fill="#47577b"
          barSize={15}
          name="Fuel Consumption (MT)"
        >
          {/* <LabelList dataKey="fuelConsumptionActual" position="top" /> */}
          {/* Display values */}
        </Bar>

        <Bar
          dataKey="fuelConsumptionNoon"
          fill="#e6697f"
          barSize={15}
          name="Noon Fuel Consumption (MT)"
        >
          {/* <LabelList dataKey="fuelConsumptionNoon" position="top" /> */}
          {/* Display values */}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    // </Box>
  );
};

export default ActualVsNoonFuelConsumption;
