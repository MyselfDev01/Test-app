import React from "react";
import { styled } from "@mui/material";

const Container = styled("div")(() => ({
  maxWidth: "100% !important",
  height: "100vh",
}));

export const Main = ({ children }) => {
  return <Container>{children}</Container>;
};
