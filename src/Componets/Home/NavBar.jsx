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
const NavItems = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: 2px solid red;
  height: 100%;
  padding: 12px 8px;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;

const NavBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Componet>
          {navData.map((data) => (
            <NavItems key={data.key}>
              <img src={data.url} alt="img" style={{ width: 64 }} />
              <Text>{data.text}</Text>
            </NavItems>
          ))}
        </Componet>
      </ThemeProvider>
    </>
  );
};
export default NavBar;
