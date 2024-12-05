import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const LiveVoyageBox = (props: any) => {
  return (
    <Paper
      sx={{
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        borderRadius: 1,
        padding: (theme) => theme.spacing(1, 2),
        width: "100%",
        height: "55rem",
        margin: (theme) => theme.spacing(0.5),
        bgcolor: "#f9f9f9",
      }}
    >
      <Box display={"flex"} flexDirection="column" gap={2}>
        <Box textAlign={"left"}>
          <Typography variant="body2" fontSize={18} color="#FF825B">
            <strong>{props.title}</strong>
          </Typography>
        </Box>

        <Box
          display={"flex"}
          flexDirection={props.flexDirection ? props.flexDirection : "column"}
          justifyContent={props.flexDirection === "row" ? "space-between" : ""}
          gap={2}
        >
          {props.children}
        </Box>
      </Box>
    </Paper>
  );
};

export default LiveVoyageBox;
