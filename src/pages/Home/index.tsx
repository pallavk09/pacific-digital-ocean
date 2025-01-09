import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  styled,
  keyframes,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BuildIcon from "@mui/icons-material/Build";
import WarningIcon from "@mui/icons-material/Warning";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

import EngineTempreture from "../../components/Engine/EngineTempreture";
import NavigationItem from "../../components/Navigation/NavigationItem";
import SectionBox from "../../components/SectionBox/SectionBox";
import { useEffect, useState, useRef } from "react";
import VesselMap from "../../components/VesselMap/VesselMap";
import NavSectionBox from "../../components/NavSectionBox/NavSectionBox";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import VoyageSectionBox from "../../components/VoyageSectionBox/NavSectionBox";
import LiveVoyageBox from "../../components/LiveVoyageBox/NavSectionBox";
import RouteChart from "../../components/RouteChart/RouteChart";
import RouteNavigationBox from "../../components/RouteNavigationBox/RouteNavigationBox";
import EngineSectionBox from "../../components/EngineSectionBox/EngineSectionBox";

const Home = () => {
  const plannedRoute: Array<[number, number]> = [
    [37.7749, -122.4194], // Starting point
    [36.7783, -119.4179], // Midway point
    [34.0522, -118.2437], // Destination
  ];
  const [positionMain, setPositionMain] = useState({ top: 0, left: 0 });
  const [positionAux, setPositionAux] = useState({ top: 0, right: 0 });
  const [positionDG, setPositionDG] = useState({ top: 0, right: 0 });
  const containerRefMain = useRef(null);
  const containerRefAux = useRef(null);
  const containerRefDG = useRef(null);
  const [showDetailsMain, setShowDetailsMain] = useState(false);
  const [showDetailsAux, setShowDetailsAux] = useState(false);
  const [showDetailsDG, setShowDetailsDG] = useState(false);

  const handleMouseClickrMain = (event: any) => {
    console.log("Inside click");
    const { top, left, height, width } =
      event.currentTarget.getBoundingClientRect();
    console.log(event.currentTarget.getBoundingClientRect());
    const screenWidth = window.innerWidth;
    const boxWidth = 800; // Set box width
    const adjustedLeft =
      left + boxWidth > screenWidth ? screenWidth - boxWidth - 10 : left;
    console.log("adjustedLeft", adjustedLeft);
    // setPositionMain({
    //   top: top + height + 5,
    //   left: adjustedLeft,
    // });

    setPositionMain({
      top: 0,
      left: 0,
    });
    setShowDetailsMain(true);
  };

  const handleMouseClickAux = (event: any) => {
    console.log("Inside click");
    const { top, left, height, width } =
      event.currentTarget.getBoundingClientRect();
    console.log(event.currentTarget.getBoundingClientRect());
    const screenWidth = window.innerWidth;
    const boxWidth = 800; // Set box width
    const adjustedLeft =
      left + boxWidth > screenWidth ? screenWidth - boxWidth - 10 : left;
    setPositionAux({
      top: 0,
      right: 50,
    });
    setShowDetailsAux(true);
  };

  const handleMouseClickDG = (event: any) => {
    console.log("Inside click");
    const { top, left, height, width } =
      event.currentTarget.getBoundingClientRect();
    console.log(event.currentTarget.getBoundingClientRect());
    const screenWidth = window.innerWidth;
    const boxWidth = 800; // Set box width
    const adjustedLeft =
      left + boxWidth > screenWidth ? screenWidth - boxWidth - 10 : left;

    setPositionDG({
      top: 0,
      // left: 0,
      right: 50,
    });
    setShowDetailsDG(true);
  };

  const handleMouseLeaveMain = () => {
    setShowDetailsMain(false);
  };

  const handleMouseLeaveAux = () => {
    setShowDetailsAux(false);
  };

  const handleMouseLeaveDG = () => {
    setShowDetailsDG(false);
  };

  const formula = `
    Fuel Efficiency = Distance Traveled (nautical miles) / Fuel Consumed (tons or liters)
    Or
    Fuel Efficiency = (Cargo Weight (tons) × Distance Traveled (nautical miles)) / Fuel Consumed (tons)
  `;

  const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;
  const BlinkingText = styled(Typography)(({ theme }) => ({
    animation: `${blinkAnimation} 1s infinite`,
  }));

  const BlinkingWrapper = styled(Box)(({ theme }) => ({
    display: "inline-block", // Ensures it wraps around content properly
    animation: `${blinkAnimation} 1s infinite`, // Apply blinking animation
  }));
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = ["Item 1", "Item 2", "Item 3"]; // Sidebar items
  const details = {
    "Item 1": "Details about Item 1",
    "Item 2": "Details about Item 2",
    "Item 3": "Details about Item 3",
  };
  const tableData = [
    ["25 °C", "35 °C", "40 °C", "25 °C", "27 °C", "30 °C"],
    // [
    //   "Data 2.1",
    //   "Data 2.2",
    //   "Data 2.3",
    //   "Data 2.4",
    //   "Data 2.5",
    //   "Data 2.6",
    //   "Data 2.7",
    //   "Data 2.8",
    //   "Data 2.9",
    //   "Data 2.10",
    //   "Data 2.11",
    // ],
    // [
    //   "Data 3.1",
    //   "Data 3.2",
    //   "Data 3.3",
    //   "Data 3.4",
    //   "Data 3.5",
    //   "Data 3.6",
    //   "Data 3.7",
    //   "Data 3.8",
    //   "Data 3.9",
    //   "Data 3.10",
    //   "Data 3.11",
    // ],
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
    <Box display={"flex"} flexDirection={"column"} gap={0} width={"auto"}>
      {/* Navigation Details */}
      <NavSectionBox title="Navigation Details" flexDirection="row">
        <NavigationItem value={"01-11.60N"} title={"LAT"} />
        <NavigationItem value={"103-50.48E"} title={"LONG"} />
        <NavigationItem value={"248"} title={"COURSE AT SEA"} />
        <NavigationItem value={"248"} title={"HEADING"} />
        <NavigationItem value={"14.59"} title={"DRAFT AFT"} />
        <NavigationItem value={"13.59"} title={"DRAFT FWD"} />
        <NavigationItem value={"14.59"} title={"DRAFT"} />
        <NavigationItem value={"0"} title={"SOG"} />
        <NavigationItem value={"0"} title={"SOW"} />
        <NavigationItem value={"10"} title={"MILES BY GPS"} />
        <NavigationItem value={"11"} title={"MILES BY SPEED LOG"} />
        <NavigationItem value={"2626"} title={"DISTANCE TO GO"} />
        <NavigationItem value={"88365"} title={"DISPLACEMENT"} />
      </NavSectionBox>
      {/* Weather Details */}
      <NavSectionBox title="Weather Details" flexDirection="row">
        <NavigationItem value={"220"} title={"WIND DIRECTION"} />
        <NavigationItem value={"12"} title={"WIND SPEED"} />
        <NavigationItem value={"4"} title={"SEA STATE"} />
        <NavigationItem value={"2"} title={"SEA HEIGHT"} />
        <NavigationItem value={"220"} title={"SEA DIRECTION"} />
        <NavigationItem value={"28"} title={"AMBIENT TEMP"} />
        <NavigationItem value={"46"} title={"WATER DEPTH"} />
        <NavigationItem value={"0.4"} title={"CURRENT FORCE"} />
        <NavigationItem value={"NNW"} title={"CURRENT DIRECTION"} />
        <NavigationItem value={"29.0"} title={"SW TEMP"} />
      </NavSectionBox>
      {/* Main Engine, Aux Engine, DG Set */}
      <EngineSectionBox title="" flexDirection="row">
        {/* Main */}
        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Main Engine</strong>
              </Typography>
              <Box position="relative">
                <IconButton
                  onClick={handleMouseClickrMain}
                  // onClick={() => setShowDetailsMain(!showDetailsMain)}
                  // onMouseLeave={() => setShowDetails(false)}
                  style={{ padding: 0 }}
                >
                  <DeviceThermostatIcon
                    style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  />
                </IconButton>
                <Box
                  // position="absolute"
                  // top={30}
                  // right={0}
                  // width="auto"
                  // height="auto"
                  // bgcolor="#FFF"
                  // boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  // borderRadius="8px"
                  // padding="12px"
                  // zIndex={1}
                  ref={containerRefMain}
                  position="absolute"
                  top={`${positionMain.top}px`}
                  left={`${positionMain.left}px`}
                  width="auto"
                  maxWidth="900px"
                  maxHeight="400px"
                  overflow="auto"
                  bgcolor="#FFF"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  borderRadius="8px"
                  padding="16px"
                  zIndex={1}
                  onMouseLeave={handleMouseLeaveMain}
                  style={{
                    opacity: showDetailsMain ? 1 : 0,
                    transform: showDetailsMain
                      ? "translateY(0)"
                      : "translateY(-10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: showDetailsMain ? "all" : "none",
                  }}
                >
                  {/* <Typography variant="body2" color="#333">
                    Details about the main engine go here. You can include more
                    information as needed.
                  </Typography> */}
                  <TableContainer>
                    <Table
                      sx={{
                        borderCollapse: "collapse",
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          {[...Array(6)].map((_, index) => (
                            <TableCell
                              key={index}
                              align="center"
                              sx={{
                                border: "1px solid #ddd",
                                fontWeight: "bold",
                                backgroundColor: "#f9f9f9",
                              }}
                            >
                              CLY {index + 1}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell
                                key={cellIndex}
                                align="center"
                                sx={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                }}
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine RPM</strong>
                </Typography>
                <Typography variant="body2">{"IN HZR"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine Fuel Consumption (L/h)</strong>
                </Typography>
                <Typography variant="body2">{"HAZIRA"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine Engine Temperature (Â°C)</strong>
                </Typography>
                <Typography variant="body2">{"30-10-2019 / 2000"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>
                    <span style={{ color: "#e6697f" }}>INLET </span>Engine Oil
                    Pressure (bar)
                  </strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>
                    <span style={{ color: "#e6697f" }}>OUTLET </span>Engine
                    Shaft Vibration (mm/s)
                  </strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>

        {/* Aux */}
        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Aux Engine</strong>
              </Typography>

              <Box position="relative">
                <IconButton
                  onClick={handleMouseClickAux}
                  // onMouseLeave={() => setShowDetails(false)}
                  style={{ padding: 0 }}
                >
                  <DeviceThermostatIcon
                    style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  />
                </IconButton>
                <Box
                  // position="absolute"
                  // top={30}
                  // right={0}
                  // width="auto"
                  // height="auto"
                  // bgcolor="#FFF"
                  // boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  // borderRadius="8px"
                  // padding="12px"
                  // zIndex={1}
                  ref={containerRefAux}
                  position="absolute"
                  top={`${positionAux.top}px`}
                  right={`${positionAux.right}px`}
                  maxWidth="800px"
                  maxHeight="400px"
                  overflow="auto"
                  bgcolor="#FFF"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  borderRadius="8px"
                  padding="16px"
                  zIndex={1}
                  onMouseLeave={handleMouseLeaveAux}
                  style={{
                    opacity: showDetailsAux ? 1 : 0,
                    transform: showDetailsAux
                      ? "translateY(0)"
                      : "translateY(-10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: showDetailsAux ? "all" : "none",
                  }}
                >
                  {/* <Typography variant="body2" color="#333">
                    Details about the main engine go here. You can include more
                    information as needed.
                  </Typography> */}
                  <TableContainer>
                    <Table
                      sx={{
                        borderCollapse: "collapse",
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          {[...Array(6)].map((_, index) => (
                            <TableCell
                              key={index}
                              align="center"
                              width={"auto"}
                              sx={{
                                border: "1px solid #ddd",
                                fontWeight: "bold",
                                backgroundColor: "#f9f9f9",
                              }}
                            >
                              CLY {index + 1}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell
                                key={cellIndex}
                                align="center"
                                sx={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                }}
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine RPM</strong>
                </Typography>
                <Typography variant="body2">{"IN HZR"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine Fuel Consumption (L/h)</strong>
                </Typography>
                <Typography variant="body2">{"HAZIRA"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine Engine Temperature (Â°C)</strong>
                </Typography>
                <Typography variant="body2">{"30-10-2019 / 2000"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>
                    <span style={{ color: "#e6697f" }}>INLET </span>Engine Oil
                    Pressure (bar)
                  </strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>
                    <span style={{ color: "#e6697f" }}>OUTLET </span>Engine
                    Shaft Vibration (mm/s)
                  </strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>

        {/* DG */}
        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>DG Set</strong>
              </Typography>

              <Box position="relative">
                <IconButton
                  onClick={handleMouseClickDG}
                  // onMouseLeave={() => setShowDetails(false)}
                  style={{ padding: 0 }}
                >
                  <DeviceThermostatIcon
                    style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  />
                </IconButton>
                <Box
                  // position="absolute"
                  // top={30}
                  // right={0}
                  // width="auto"
                  // height="auto"
                  // bgcolor="#FFF"
                  // boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  // borderRadius="8px"
                  // padding="12px"
                  // zIndex={1}
                  ref={containerRefDG}
                  position="absolute"
                  top={`${positionDG.top}px`}
                  // left={`${positionDG.left}px`}
                  right={`${positionDG.right}px`}
                  maxWidth="800px"
                  maxHeight="400px"
                  overflow="auto"
                  bgcolor="#FFF"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  borderRadius="8px"
                  padding="16px"
                  zIndex={1}
                  onMouseLeave={handleMouseLeaveDG}
                  style={{
                    opacity: showDetailsDG ? 1 : 0,
                    transform: showDetailsDG
                      ? "translateY(0)"
                      : "translateY(-10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: showDetailsDG ? "all" : "none",
                  }}
                >
                  {/* <Typography variant="body2" color="#333">
                    Details about the main engine go here. You can include more
                    information as needed.
                  </Typography> */}
                  <TableContainer>
                    <Table
                      sx={{
                        borderCollapse: "collapse",
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          {[...Array(6)].map((_, index) => (
                            <TableCell
                              key={index}
                              align="center"
                              sx={{
                                border: "1px solid #ddd",
                                fontWeight: "bold",
                                backgroundColor: "#f9f9f9",
                              }}
                            >
                              CLY {index + 1}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell
                                key={cellIndex}
                                align="center"
                                sx={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                }}
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine RPM</strong>
                </Typography>
                <Typography variant="body2">{"IN HZR"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine Fuel Consumption (L/h)</strong>
                </Typography>
                <Typography variant="body2">{"HAZIRA"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Engine Engine Temperature (Â°C)</strong>
                </Typography>
                <Typography variant="body2">{"30-10-2019 / 2000"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>
                    <span style={{ color: "#e6697f" }}>INLET </span>Engine Oil
                    Pressure (bar)
                  </strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>
                    <span style={{ color: "#e6697f" }}>OUTLET </span>Engine
                    Shaft Vibration (mm/s)
                  </strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>
      </EngineSectionBox>
      <LiveVoyageBox title="" flexDirection="row">
        {/* <Box sx={{ marginTop: "0px" }}> */}
        <VesselMap plannedRoute={plannedRoute} actualRoute={actualRoute} />
        {/* </Box> */}
        <Box
          display={"flex"}
          flexDirection="column"
          gap={2}
          height={"auto"}
          width={"40%"}
        >
          <Paper
            sx={{
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
              borderRadius: 1,
              padding: (theme) => theme.spacing(1, 2),
              width: "100%",
              height: "auto",
              margin: (theme) => theme.spacing(0.5),
              bgcolor: "#f9f9f9",
            }}
          >
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
              gap={2}
            >
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Compliance Status</strong>
              </Typography>
              <BlinkingWrapper>
                <Box
                  bgcolor={"#e6697f"}
                  sx={{ borderRadius: "100%" }}
                  width={"20px"}
                  height={"20px"}
                  p={1}
                ></Box>
              </BlinkingWrapper>
            </Box>
          </Paper>

          <Paper
            sx={{
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
              borderRadius: 1,
              padding: (theme) => theme.spacing(1, 2),
              width: "100%",
              height: "auto",
              margin: (theme) => theme.spacing(0.5),
              bgcolor: "#f9f9f9",
            }}
          >
            <Box display={"flex"} flexDirection="column" gap={2}>
              <Box textAlign={"left"}>
                <Typography variant="body2" fontSize={18} color="#FF825B">
                  <strong>Alerts and Notifications</strong>
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">
                    {<LocalGasStationIcon />}
                  </Typography>
                  <BlinkingWrapper>
                    <Typography variant="body2" color="#e6697f">
                      <strong>LOW</strong>
                    </Typography>
                  </BlinkingWrapper>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">{<LocationOnIcon />}</Typography>
                  <Typography variant="body2">{"1"}</Typography>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">{<CloudIcon />}</Typography>
                  <Typography variant="body2">{2}</Typography>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">{<BuildIcon />}</Typography>
                  <BlinkingWrapper>
                    {<WarningIcon style={{ color: "#FF4136", fontSize: 20 }} />}
                  </BlinkingWrapper>
                </Box>
                <Divider />
              </Box>
            </Box>
          </Paper>

          <Paper
            sx={{
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
              borderRadius: 1,
              padding: (theme) => theme.spacing(1, 2),
              width: "100%",
              height: "auto",
              margin: (theme) => theme.spacing(0.5),
              bgcolor: "#f9f9f9",
            }}
          >
            <Box display={"flex"} flexDirection="column" gap={2}>
              <Box textAlign={"left"}>
                <Typography variant="body2" fontSize={18} color="#FF825B">
                  <strong>Cargo Information</strong>
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">
                    <strong>Type</strong>
                  </Typography>
                  <Typography variant="body2">{"Electronics"}</Typography>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">
                    <strong>Weight</strong>
                  </Typography>
                  <Typography variant="body2">{"25000 Tons"}</Typography>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">
                    <strong>Destination</strong>
                  </Typography>
                  <Typography variant="body2">{"Shanghai, China"}</Typography>
                </Box>
                <Divider />
              </Box>
            </Box>
          </Paper>

          <Paper
            sx={{
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
              borderRadius: 1,
              padding: (theme) => theme.spacing(1, 2),
              width: "100%",
              height: "auto",
              margin: (theme) => theme.spacing(0.5),
              bgcolor: "#f9f9f9",
            }}
          >
            <Box display={"flex"} flexDirection="column" gap={2}>
              <Box textAlign={"left"}>
                <Typography variant="body2" fontSize={18} color="#FF825B">
                  <strong>Fuel Status</strong>
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">
                    <strong>Remaining Fuel</strong>
                  </Typography>
                  <Box
                    display={"flex"}
                    flexDirection="row"
                    justifyContent={"space-between"}
                    gap={1}
                    pb={1}
                  >
                    <Typography variant="body2">{"5000 Ltr"}</Typography>
                    <Box
                      bgcolor={"#35821d"}
                      sx={{ borderRadius: "10%" }}
                      width={"40px"}
                      height={"20px"}
                      // p={0.5}
                    ></Box>
                  </Box>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Typography variant="body2">
                    <strong>Consumption Rate</strong>
                  </Typography>
                  <Typography variant="body2">{"350 Ltr/Hr"}</Typography>
                </Box>
                <Divider />
              </Box>

              <Box display={"flex"} flexDirection="column" gap={0}>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    flexDirection="row"
                    justifyContent={"flex-start"}
                  >
                    <Typography variant="body2">
                      <strong>Efficiency</strong>
                    </Typography>
                    <Tooltip
                      title={
                        <Typography
                          variant="body2"
                          style={{
                            color: "#FFF",
                            backgroundColor: "#333",
                            padding: "8px",
                          }}
                        >
                          {formula}
                        </Typography>
                      }
                      arrow
                    >
                      <InfoIcon style={{ height: "18px", cursor: "pointer" }} />
                    </Tooltip>
                  </Box>

                  <Typography variant="body2">
                    {"200,000 ton-miles per ton of fuel"}
                  </Typography>
                </Box>
                <Divider />
              </Box>
            </Box>
          </Paper>
        </Box>
      </LiveVoyageBox>
      {/* ETA Details,ETB/DEP Details, ETD and Delays */}
      <VoyageSectionBox title="" flexDirection="row">
        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box textAlign={"left"}>
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>{"ETA Details"}</strong>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETA Port Code</strong>
                </Typography>
                <Typography variant="body2">{"IN HZR"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETA Port</strong>
                </Typography>
                <Typography variant="body2">{"HAZIRA"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETA Date Time</strong>
                </Typography>
                <Typography variant="body2">{"30-10-2019 / 2000"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETA Offset</strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>

        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box textAlign={"left"}>
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>{"ETB/DEP Details"}</strong>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>DEP Port Code</strong>
                </Typography>
                <Typography variant="body2">{"SG"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>DEP Port</strong>
                </Typography>
                <Typography variant="body2">{"SINGAPORE"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETB Date Time</strong>
                </Typography>
                <Typography variant="body2">{"TBA"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETB Offset</strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>

        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box textAlign={"left"}>
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>{"ETD and Delays"}</strong>
              </Typography>
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETD Date Time</strong>
                </Typography>
                <Typography variant="body2">{"TBA"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>ETD Offset</strong>
                </Typography>
                <Typography variant="body2">{"-5.5"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>DELAY REASON</strong>
                </Typography>
                <Typography variant="body2">{"DISCHARGING"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>DELAY TYPE</strong>
                </Typography>
                <Typography variant="body2">{"NIL"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>

        {/* <NavigationItem value={"IN HZR"} title={"ETA PORT CODE"} />
        <NavigationItem value={"HAZIRA"} title={"ETA PORT"} />
        <NavigationItem value={"30-10-2019 / 2000"} title={"ETA DATE TIME"} />
        <NavigationItem value={"-5.5"} title={"ETA DATE TIME OFFSET"} />
        <NavigationItem value={"SG"} title={"DEP PORT CODE"} />
        <NavigationItem value={"SINGAPORE"} title={"DEP PORT"} />

        <NavigationItem value={"TBA"} title={"ETB DATE TIME"} />
        <NavigationItem value={"-5.5"} title={"ETB DATE TIME OFFSET"} />
        <NavigationItem value={"TBA"} title={"ETD DATE TIME"} />
        <NavigationItem value={"-5.5"} title={"ETD DATE TIME OFFSET"} />
        <NavigationItem value={"DISCHARGING"} title={"REASON"} />
        <NavigationItem value={"NIL"} title={"TYPE OF DELAY"} /> */}
      </VoyageSectionBox>
      <RouteNavigationBox title="" flexDirection="row">
        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "40%",
            height: "50%",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box textAlign={"left"}>
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Route and Navigation</strong>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Planned Route</strong>
                </Typography>
                <Typography variant="body2">{"IN HZR"}</Typography>
              </Box>
              <Divider />
            </Box>

            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Actual Route</strong>
                </Typography>
                <Typography variant="body2">{"HAZIRA"}</Typography>
              </Box>
              <Divider />
            </Box>

            {/* <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Route Deviations</strong>
                </Typography>
                <Typography variant="body2">{"30-10-2019 / 2000"}</Typography>
              </Box>
              <Divider />
            </Box> */}
            <Box display={"flex"} flexDirection="column" gap={0}>
              <Box
                display={"flex"}
                flexDirection="row"
                justifyContent={"space-between"}
              >
                <Typography variant="body2">
                  <strong>Waypoint Updates</strong>
                </Typography>
                <Typography variant="body2">{"30-10-2019 / 2000"}</Typography>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>

        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "60%",
            height: "50%",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box textAlign={"left"}>
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Route Varience</strong>
              </Typography>
            </Box>
            <RouteChart />
          </Box>
        </Paper>
      </RouteNavigationBox>
      {/* <EngineSectionBox title="">
        <Paper
          sx={{
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
            borderRadius: 1,
            padding: (theme) => theme.spacing(1, 2),
            width: "100%",
            height: "auto",
            margin: (theme) => theme.spacing(0.5),
            bgcolor: "#f9f9f9",
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Auxillary Engine Temp (°C)</strong>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <EngineTempreture title={"CLY 1"} temprature={0.78} />
              <EngineTempreture title={"CLY 2"} temprature={0.2} />
              <EngineTempreture title={"CLY 3"} temprature={0.46} />
              <EngineTempreture title={"CLY 4"} temprature={0.18} />
              <EngineTempreture title={"CLY 5"} temprature={0.46} />
              <EngineTempreture title={"CLY 6"} temprature={0.18} />
            </Box>
          </Box>
        </Paper>
      </EngineSectionBox> */}
    </Box>
  );
};

export default Home;
