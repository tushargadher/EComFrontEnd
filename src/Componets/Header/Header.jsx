import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { Typography, Box, Toolbar, AppBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
//styled is used to give custom css in material UI
const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: "#2874f0",
  height: "3.4rem",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    height: "6.4rem",
  },
}));

`
`;
const Component = styled(Link)(({ theme }) => ({
  marginLeft: "12%",
  lineHeight: "0",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    marginLeft: "2%",
  },
}));

const SubHeading = styled(Typography)`
  font-size: 0.625rem;
  font-style: italic;
`;
//for giving html tag css write as string
const PlusImg = styled("img")({
  width: 10,
});
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginLeft: "-11px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  width: "75px",
  [theme.breakpoints.down("md")]: {
    width: "70px",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const SubURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledHeader>
        <Toolbar>
          {/* menu which is visible in only smaller screen */}
          <MenuButton onClick={handleOpen}>
            <MenuIcon />
          </MenuButton>
          <SideDrawer open={open} handleOpen={handleOpen} />
          <Component to="/">
            <Img src={logoURL} alt="flipkart" />
            <Box>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus
                </Box>
                <PlusImg src={SubURL} alt="logo" />
              </SubHeading>
            </Box>
          </Component>
          <Search />
          <CustomButtons />
        </Toolbar>
      </StyledHeader>
    </>
  );
};
export default Header;
