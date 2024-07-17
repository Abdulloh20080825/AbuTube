import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box minWidth={"90vh"}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"80vh"}
      ></Stack>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
