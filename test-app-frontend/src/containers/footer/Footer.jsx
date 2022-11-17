import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Typography my={2} variant="body2" color="textSecondary" align="center">
      {"Copyright © "} <Link href="#">Recipes</Link> {year}
      {"."}
    </Typography>
  );
};
