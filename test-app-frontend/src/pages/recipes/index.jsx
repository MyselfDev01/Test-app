import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Button, Divider, Grid, styled, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import { ProductCard } from "../../components";
import { SubHeader } from "../../containers";
import { ContainerLg } from "../../styles";
import { useRecipesMenu } from "../../hooks";
import { PagesData } from "../../utility";
import YIELD from "../../../public/Images/YIELD.png";

const StyledClockIcon = styled(AccessTimeIcon)(() => ({
  stroke: "aliceblue",
  color: "black",
  marginRight: 2.75,
  fontSize: "2.5rem",
}));

const StyledPlusIcon = styled(AddIcon)(() => ({
  stroke: "aliceblue",
  fontSize: "2.5rem",
}));

const StyledPrintIcon = styled(LocalPrintshopOutlinedIcon)(() => ({
  stroke: "aliceblue",
  fontSize: "2.5rem",
}));

const StyledTimeArea = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
  gap: "1.5rem",
}));

const StyledYIELD = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const StyledPera = styled(Typography)(() => ({
  fontSize: ".65rem",
  textTransform: "uppercase",
  letterSpacing: ".094rem",
  color: "rgb(0 0 0 / 90%)",
  fontWeight: 600,
}));

const StyledTime = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "1rem",
  letterSpacing: "0.020rem",
  color: "#000",
}));

const StyledButtonCol = styled("div")(() => ({
  display: "flex",
  gap: "0.5rem",
  justifyContent: "flex-end",
}));

const Recipes = () => {
  const menu = useRecipesMenu();

  const data = PagesData?.find((item) => {
    return item?.url === "/recipes";
  });

  return (
    <>
      <Head>
        <title key="title">Recipes</title>
        <meta key="og:title" property="og:title" content="Recipes" />
        <meta
          key="og:url"
          property="og:url"
          content="https://www.example.com"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti eos corporis repellendus tempora libero iste inventore soluta?"
        />
      </Head>
      <SubHeader node={menu} />
      <ContainerLg>
        <ProductCard data={data}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "5rem",
                }}
              >
                <StyledClockIcon />
                <StyledTimeArea>
                  <div>
                    <StyledPera>PREP</StyledPera>
                    <StyledTime>10 mins</StyledTime>
                  </div>
                  <div>
                    <StyledPera>Back</StyledPera>
                    <StyledTime>1 hr 1 hr 15 mins</StyledTime>
                  </div>
                  <div>
                    <StyledPera>Total</StyledPera>
                    <StyledTime>1 hr 10 mins</StyledTime>
                  </div>
                </StyledTimeArea>
              </Box>
              <Divider sx={{ marginTop: 0.5, marginBottom: 0.5 }} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "5rem",
                }}
              >
                <Image src={YIELD} alt="YIELD" width={43} height={43} />
                <StyledYIELD>
                  <div>
                    <StyledPera>YIELD</StyledPera>
                    <StyledTime>1 loaf, 12 generous serving</StyledTime>
                  </div>
                  <StyledButtonCol>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<StyledPlusIcon />}
                      sx={{
                        height: "2.7rem",
                      }}
                    >
                      Save Recipe
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        height: "2.7rem",
                      }}
                      startIcon={<StyledPrintIcon />}
                    >
                      Print
                    </Button>
                  </StyledButtonCol>
                </StyledYIELD>
              </Box>
            </Grid>
          </Grid>
        </ProductCard>
      </ContainerLg>
    </>
  );
};

export default Recipes;
