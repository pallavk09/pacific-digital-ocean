import { Box } from "@mui/material";

import EngineTempreture from "../../components/Engine/EngineTempreture";
import NavigationItem from "../../components/Navigation/NavigationItem";
import SectionBox from "../../components/SectionBox/SectionBox";
import { useEffect, useState } from "react";
import VesselMap from "../../components/VesselMap/VesselMap";

const Home = () => {
  const plannedRoute: Array<[number, number]> = [
    [37.7749, -122.4194], // Starting point
    [36.7783, -119.4179], // Midway point
    [34.0522, -118.2437], // Destination
  ];
  const [actualRoute, setActualRoute] = useState<Array<[number, number]>>([]);
  useEffect(() => {
    // Simulate real-time vessel route updates
    const routeUpdate = setInterval(() => {
      setActualRoute((prevRoute: any) => {
        if (prevRoute.length < plannedRoute.length) {
          return [...prevRoute, plannedRoute[prevRoute.length]];
        }
        return prevRoute;
      });
    }, 2000);

    return () => clearInterval(routeUpdate);
  }, [plannedRoute]);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={0}>
      <SectionBox title="Navigation Details">
        <NavigationItem value={"00.45 ms"} title={"Latitude"} />
      </SectionBox>

      <SectionBox title="Map and Route Details">
        <Box sx={{ marginTop: "20px" }}>
          <VesselMap plannedRoute={plannedRoute} actualRoute={actualRoute} />
        </Box>
      </SectionBox>

      <SectionBox title="Auxillary Engine Tempreture">
        <Box display={"flex"} flexDirection={"row"}>
          <EngineTempreture title={"Engine 1"} temprature={0.78} />
          <EngineTempreture title={"Engine 2"} temprature={0.2} />
          <EngineTempreture title={"Engine 3"} temprature={0.46} />
          <EngineTempreture title={"Engine 4"} temprature={0.18} />
        </Box>
      </SectionBox>
    </Box>
  );
};

export default Home;
