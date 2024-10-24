import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";

import GaugeChart from "react-gauge-chart";

const EngineTempreture = (props: any) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      pb={3}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <GaugeChart
          id="engine-temperature-gauge"
          nrOfLevels={10} // Number of levels in the gauge
          percent={props.temprature} // Dynamically updated temperature value (between 0 and 1)
          textColor="#000000" // Color of the text inside the gauge
          colors={["#a8e6cf", "#ffeb99", "#ff8b94"]} // Green, Yellow, Red
          arcWidth={0.15} // Width of the gauge arc
          needleColor="#e29578" // Needle color
          style={{
            height: 100,
          }}
        />
        <Typography variant="h6">{props.title}</Typography>
      </Box>

      {/* <p
  style={{
    textAlign: "center",
    color: "#ff5722",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  Engine Temperature: {(0.35 * 100).toFixed(2)}°C
</p> */}
    </Box>
  );
};

export default EngineTempreture;
