import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Box, Grid, Toolbar, Typography, styled } from "@mui/material";

import { useMenu } from "./useMenu";
import { ContainerMd } from "../../styles";

const StyledItems = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
  "& .active": {
    cursor: "pointer",
    position: "relative",
    textDecoration: "none",
    borderBottom: ".125rem solid #da1a32",
  },
}));

export const Desktop = () => {
  const router = useRouter();
  const menu = useMenu();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        justifyContent: "center",
        height: "80px",
      }}
    >
      <ContainerMd>
        <Toolbar disableGutters>
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={9}>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              >
                <Grid justifyContent="start" container columns={{ md: 12 }}>
                  {menu?.map((page, index) => {
                    return (
                      <Grid item sm={1.5} key={index}>
                        <StyledItems key={index}>
                          <Link href={page?.link}>
                            <Typography
                              textTransform="uppercase"
                              color="black"
                              className={
                                router.pathname == page?.link ? "active" : null
                              }
                            >
                              {page?.title}
                            </Typography>
                          </Link>
                        </StyledItems>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Toolbar>
      </ContainerMd>
    </AppBar>
  );
};
