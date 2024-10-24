import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const SectionBox = (props: any) => {
  return (
    <Paper
      sx={{
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        borderRadius: 1,
        padding: (theme) => theme.spacing(1, 2),
        width: "100%",
        margin: (theme) => theme.spacing(0.5),
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Box textAlign={"left"}>
          <Typography variant="body2">
            <strong>{props.title}</strong>
          </Typography>
        </Box>
        {props.children}
      </Box>
    </Paper>
  );
};

export default SectionBox;
