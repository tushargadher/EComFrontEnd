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
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 3.4rem;
  box-shadow: none;
  display: flex;
  justify-content: center;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
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
            <img src={logoURL} alt="flipkart" style={{ width: 75 }} />
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
