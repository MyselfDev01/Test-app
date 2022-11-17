import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ position: "relative" }}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Box>
  );
};
