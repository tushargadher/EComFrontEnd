import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "16%",
  height: "100%",
  background: "white",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "15%",
    // border: "1px solid red",
  },
}));
const Wrap = styled(Box)(({ theme }) => ({
  height: "60%",
  // background: "red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
const Typographys = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const ViewButton = styled(Button)(({ theme }) => ({
  borderRadius: "2px",
  height: "2.5rem",
  width: "6rem",
  background: "#2874f0",
  color: "#fff",
  marginTop: "2rem",
  fontSize: "0.8rem",
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    height: "1.6rem",
    width: "5rem",
    fontSize: "0.7rem",
  },
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const hoverEfffect = {
  background: "#2874f0",
  "&:hover": {
    background: "#2874f0",
  },
};
const SideBanner = ({ name, BannerImgURL }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Wrap>
            <Typographys>{name}</Typographys>
            <ViewButton sx={hoverEfffect}>View All</ViewButton>
          </Wrap>
          <Image src={BannerImgURL} alt="banner" />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default SideBanner;
