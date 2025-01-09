import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const GraphSectionBox = (props: any) => {
  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(0, 0),
        width: "100%",
        margin: (theme) => theme.spacing(0.5),
        bgcolor: "transparent",
      }}
    >
      <Box display={"flex"} flexDirection="column" gap={0}>
        <Box textAlign={"left"}>
          <Typography variant="body2" fontSize={18} color="#FF825B">
            <strong>{props.title}</strong>
          </Typography>
        </Box>

        <Box
          display={"flex"}
          flexDirection={props.flexDirection ? props.flexDirection : "column"}
          justifyContent={props.flexDirection === "row" ? "space-between" : ""}
          gap={0.5}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default GraphSectionBox;
