import * as React from "react";
import Link from "next/link";
import { Breadcrumbs, Stack, styled, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const StyledBox = styled("div")(() => ({
  boxShadow: "none",
  marginTop: "2.5rem",
  marginLeft: "3rem",
}));

const StyledLink = styled(Link)(() => ({
  fontSize: ".75rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: ".094rem",
  textDecoration: "none",
  color: "#000",
}));

const StyledText = styled(Typography)(() => ({
  fontSize: ".75rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: ".094rem",
  textDecoration: "none",
  color: "#000",
}));

const StyledNextIcon = styled(NavigateNextIcon)(() => ({
  fill: "#da1a32",
}));

export const BreadCrumbs = ({ urls }) => {
  const url = urls.split("/");

  const breadcrumbs = [
    <StyledLink key="1" href="/">
      Home
    </StyledLink>,
    <StyledText key="3">
      {urls === "/" ? "shop" : url[url.length - 1]}
    </StyledText>,
  ];

  return (
    <StyledBox>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<StyledNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </StyledBox>
  );
};
