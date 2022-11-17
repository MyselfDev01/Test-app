import Image from "next/image";
import { Card, CardContent, Grid, styled, Typography } from "@mui/material";

import { BreadCrumbs } from "../breadcrumbs";

const StyledCard = styled(Card)(() => ({
  boxShadow: "none",
}));

const ProductImg = styled(Image)(() => ({
  width: "670px",
  height: "auto",
}));

export const ProductCard = ({ data, children }) => {
  const { title, description, imageUrl, url } = data;

  return (
    <>
      <BreadCrumbs urls={url} />
      <StyledCard>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <CardContent
              sx={{
                padding: (theme) =>
                  `${theme.spacing(3.25, 5.75, 6.25)} !important`,
              }}
            >
              <Typography
                variant="h3"
                fontWeight={500}
                sx={{ marginBottom: 12 }}
              >
                {title}
              </Typography>
              <Typography variant="body2" data-testid="p-tag-description">
                {description}
              </Typography>
              {children}
            </CardContent>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              paddingTop: ["0 !important", "1.5rem !important"],
              paddingLeft: ["1.5rem !important", "0 !important"],
            }}
          >
            <CardContent>
              <ProductImg
                data-testid={"product-image"}
                src={imageUrl}
                alt={url}
                priority
              />
            </CardContent>
          </Grid>
        </Grid>
      </StyledCard>
    </>
  );
};
