import { Box, Typography, Tooltip } from "@mui/material";

const NavigationItem = (props: any) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Tooltip title="Sample title for tooltip" arrow>
        <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
          <Typography variant="body2" fontSize={15}>
            <strong>{props.value}</strong>
          </Typography>
          <Typography variant="body2" fontSize={12}>
            {props.title}
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default NavigationItem;
