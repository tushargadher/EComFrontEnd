import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "16%",
  height: "100%",
  backGround: "white",
  overflow: "hidden",
  marginLeft: "0.8rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Img = styled("img")({});
const SideAD = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Img
            src="https://rukminim1.flixcart.com/fk-p-flap/278/340/image/cb34acb8965c0c5e.jpg?q=70"
            alt="banner"
          />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default SideAD;
