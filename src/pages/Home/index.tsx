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
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BuildIcon from "@mui/icons-material/Build";
import WarningIcon from "@mui/icons-material/Warning";

import EngineTempreture from "../../components/Engine/EngineTempreture";
import NavigationItem from "../../components/Navigation/NavigationItem";
import SectionBox from "../../components/SectionBox/SectionBox";
import { useEffect, useState } from "react";
import VesselMap from "../../components/VesselMap/VesselMap";
import NavSectionBox from "../../components/NavSectionBox/NavSectionBox";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import VoyageSectionBox from "../../components/VoyageSectionBox/NavSectionBox";
import LiveVoyageBox from "../../components/LiveVoyageBox/NavSectionBox";

const Home = () => {
  const plannedRoute: Array<[number, number]> = [
    [37.7749, -122.4194], // Starting point
    [36.7783, -119.4179], // Midway point
    [34.0522, -118.2437], // Destination
  ];

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
    //================= DESIGN 1 ==============================
    // <Box
    //   display={"flex"}
    //   flexDirection={"column"}
    //   gap={2}
    //   width="92vw"
    //   height="88vh"
    //   // sx={{
    //   //   bgcolor: "#332846",
    //   // }}
    //   padding={1}
    // >
    //   <Box
    //     display={"flex"}
    //     flexDirection={"row"}
    //     gap={2}
    //     width={"90vw"}
    //     justifyContent={"space-between"}
    //     padding={0}
    //     // sx={{
    //     //   bgcolor: "green",
    //     // }}
    //   >
    //     <Box
    //       display={"flex"}
    //       flexDirection={"row"}
    //       width={"50%"}
    //       sx={{
    //         bgcolor: "#fff",
    //       }}
    //       alignItems={"center"}
    //       justifyContent={"space-between"}
    //       p={1}
    //     >
    //       <Box>
    //         <SvgIcon
    //           src="ship2.png"
    //           aria-label="homepage"
    //           width="50%"
    //           height="50%"
    //         />
    //       </Box>
    //       <Box>
    //         <p>Ship Details</p>
    //       </Box>
    //     </Box>
    //     <Box
    //       display={"flex"}
    //       width={"50%"}
    //       sx={{
    //         bgcolor: "#fff",
    //       }}
    //       alignItems={"center"}
    //       justifyContent={"center"}
    //     >
    //       <p>Box2</p>
    //     </Box>
    //   </Box>
    // </Box>

    //================= DESIGN 2 ==============================
    <Box display={"flex"} flexDirection={"column"} gap={0}>
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
      <NavSectionBox title="Weather Details" flexDirection="row">
        <NavigationItem value={"4"} title={"SEA STATE"} />
        <NavigationItem value={"220"} title={"WIND DIRECTION"} />
        <NavigationItem value={"12"} title={"WIND SPEED"} />
        <NavigationItem value={"2"} title={"WIND HEIGHT"} />
        <NavigationItem value={"220"} title={"SEA DIRECTION"} />
        <NavigationItem value={"28"} title={"AMBIENT TEMP"} />
        <NavigationItem value={"46"} title={"WATER DEPTH"} />
        <NavigationItem value={"0.4"} title={"CURRENT FORCE"} />
        <NavigationItem value={"NNW"} title={"CURRENT DIRECTION"} />
        <NavigationItem value={"29.0"} title={"SW TEMP"} />
      </NavSectionBox>
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
                  <Typography variant="body2">{"5000 Ltr"}</Typography>
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
                  <Typography variant="body2">
                    <strong>Efficiency</strong>
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
              width: "100%",
              height: "auto",
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

              <Box display={"flex"} flexDirection="column" gap={0}>
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
              </Box>
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
        </Box>
      </LiveVoyageBox>

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
