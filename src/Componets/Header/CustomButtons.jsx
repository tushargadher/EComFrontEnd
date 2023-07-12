import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import { Box, Menu, MenuItem, Typography, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { DataState } from "../../../context/DataProvider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "34%",
  height: "50%",
  marginLeft: "2%",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const LoginButton = styled(Button)`
  background: #ffffff;
  color: #2874f0;
  border-radius: 1px;
  text-transform: capitalize;
  padding: 5px 2.5rem;
  box-shadow: none;
  height: 100%;
  font-weight: bold;
`;
const Typographys = styled(Typography)`
  font-weight: bold;
  text-decoratin: none;
`;

const hoverEfffect = {
  background: "#ffffff",
  "&:hover": {
    background: "#ffffff",
  },
};

const CustomButtons = () => {
  const { loggedUser } = DataState();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // redirect user to become seller website
  const handleRedirect = () => {
    location.href = "https://seller.flipkart.com/sell-online/";
  };

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <Wrapper>
        {loggedUser ? (
          <>
            <Profile />
          </>
        ) : (
          <LoginButton onClick={handleOpen} sx={hoverEfffect}>
            Login
          </LoginButton>
        )}

        <Typographys onClick={handleRedirect} style={{ cursor: "pointer" }}>
          Become a Seller
        </Typographys>
        <Typographys style={{ cursor: "pointer" }} onClick={handleMenu}>
          More
        </Typographys>
        <Link
          to="/cart"
          display="flex"
          style={{
            color: "inherit",
            display: "flex",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typographys style={{ marginLeft: 5 }}>Cart</Typographys>
        </Link>
        <LoginDialog open={open} setOpen={setOpen} />
        <Menu anchorEl={openMenu} open={Boolean(openMenu)} onClose={handleMenu}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Wrapper>
    </>
  );
};
export default CustomButtons;
