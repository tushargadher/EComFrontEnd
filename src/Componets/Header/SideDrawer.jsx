import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const SideDrawer = ({ open, handleOpen }) => {
  const handleRedirect = () => {
    location.href = "https://seller.flipkart.com/sell-online/";
  };
  return (
    <>
      <Drawer open={open} onClose={handleOpen}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleRedirect}>
              <ListItemText primary="Become a Seller" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="More" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ShoppingCartIcon />
              <ListItemText primary="Cart" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default SideDrawer;
