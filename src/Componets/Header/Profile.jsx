import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { DataState } from "../../../context/DataProvider";
// import { styled } from "@mui/material/styles";
const Profile = () => {
  const { loggedUser, setLoggedUser } = DataState();
  const [open, setOpen] = useState(false);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    setLoggedUser("");
  };
  //   const LogoutButton = styled(Typography)`
  //   font-weight: bold;
  // `;
  return (
    <>
      <Box onClick={handleOpen} carsor="pointer">
        <Typography style={{ cursor: "pointer" }}>{loggedUser}</Typography>
      </Box>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleLogout();
          }}
        >
          <PowerSettingsNewIcon style={{ marginRight: 5, color: "#2874F0" }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
