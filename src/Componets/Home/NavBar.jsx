import React from "react";
import Box from "@mui/material/Box";
import { navData } from "../../constants/data";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Componet = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid darkgray",
  marginTop: "3.4rem",
  padding: "0 130px",
  overflow: "overlay",
  background: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));
const NavItems = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  padding: "12px 8px",
  [theme.breakpoints.down("md")]: {
    padding: "5px 3px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    fontWeight: "400",
  },
}));

const Img = styled("img")(({ theme }) => ({
  width: "64px",
  [theme.breakpoints.down("md")]: {
    width: "44px",
  },
}));

const NavBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Componet>
          {navData.map((data) => (
            <NavItems key={data.key}>
              <Img src={data.url} alt="img" />
              <Text>{data.text}</Text>
            </NavItems>
          ))}
        </Componet>
      </ThemeProvider>
    </>
  );
};
export default NavBar;
