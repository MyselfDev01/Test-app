import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { ContainerMd } from "../../styles";
import logo from "../../../public/Images/logo.png";

const StyledLogo = styled(Image)(() => ({
  position: "absolute",
  top: "-5rem",
}));

export const SubHeader = ({ node }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) return null
    return (
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f8f5f0",
          boxShadow: "none",
        }}
      >
        <ContainerMd>
          <Toolbar disableGutters>
            <Grid container spacing={3}>
              <Grid item xs>
                <Link href="/">
                  <StyledLogo
                    src={logo}
                    alt="Monkey Logo"
                    width={120}
                    height={120}
                    priority
                  />
                </Link>
              </Grid>
              <Grid item xs={9}>
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Grid justifyContent="start" container columns={{ md: 12 }}>
                    {node?.map((page, index) => {
                      return (
                        <Grid item sm={2} key={index}>
                          <Typography
                            fontSize={14}
                            textTransform="uppercase"
                            color="black"
                          >
                            {page?.title}
                          </Typography>
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
