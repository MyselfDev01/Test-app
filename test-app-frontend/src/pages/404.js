import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6} alignContent="center" justifyContent="center">
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              variant="contained"
              type="button"
              onClick={() => router.back()}
            >
              Back To Home
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Image
              src="/images/monkeyError.png"
              alt="error"
              width={400}
              height={400}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;
