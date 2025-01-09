import { Box, Paper, Typography } from "@mui/material";
import GraphSectionBox from "../../components/GraphSectionBox/GraphSectionBox";
import ActualVsNoonDistance from "../../components/Charts/ActualVsNoonDistance";
import ActualVsNoonSpeed from "../../components/Charts/ActualVsNoonSpeed";
import ActualVsNoonPower from "../../components/Charts/ActualVsNoonPower";
import ActualVsNoonFuelConsumption from "../../components/Charts/ActualVsNoonFuelConsumption";

const NoonVsActual = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={0} width={"auto"}>
      <GraphSectionBox title="" flexDirection="row">
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
                <strong>Distance</strong>
              </Typography>
            </Box>
            <ActualVsNoonDistance />
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
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Typography variant="body2" fontSize={18} color="#FF825B">
                <strong>Speed</strong>
              </Typography>
            </Box>
            <ActualVsNoonSpeed />
          </Box>
        </Paper>
      </GraphSectionBox>

      <GraphSectionBox title="" flexDirection="row">
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
                <strong>Power</strong>
              </Typography>
            </Box>
            <ActualVsNoonPower />
          </Box>
        </Paper>
      </GraphSectionBox>
      <GraphSectionBox title="" flexDirection="row">
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
                <strong>Fuel Consumption</strong>
              </Typography>
            </Box>
            <ActualVsNoonFuelConsumption />
          </Box>
        </Paper>
      </GraphSectionBox>
    </Box>
  );
};

export default NoonVsActual;
