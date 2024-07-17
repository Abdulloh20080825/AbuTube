import { Box, Stack } from "@mui/material";
import React from "react";
import { logo } from "../../constants/logo";
import { SearchBar } from "../";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",

        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="Logo" height={50} width={100} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
