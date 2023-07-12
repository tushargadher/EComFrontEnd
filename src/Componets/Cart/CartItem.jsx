import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { addEllipsis } from "../../../utils/comman-utils";
import GroupButton from "./GroupButton";
import { useDispatch } from "react-redux";
import { removeFromCard } from "../../../Redux/Actions/cartAction";
const LeftBox = styled(Box)`
  //   border: 1px solid black;
  width: 60%;
  display: flex;
`;
const RightBox = styled(Box)`
  //   border: 1px solid black;
`;
const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;
const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
const CancelBtn = styled(Button)`
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 1px;
  color: #000;
  padding: 10px 50px;
  margin: 10px;
`;
const RemoveBtn = styled(Button)`
  font-size: 16px;
  background: #2874f0;
  border: 1px solid #2874f0;
  color: white;
  border-radius: 1px;
  padding: 10px 50px;
  margin: 10px;
`;
const Img = styled("img")({
  padding: "20px",
  objectFit: "contain",
  height: "120px",
  weight: "120px",
});
const hoverEfffect = {
  background: "#2874f0",
  "&:hover": {
    background: "#2874f0",
  },
};
const fassured =
  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
const CartItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpenAlert = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCard(id));
  };

  return (
    <>
      <Box>
        <LeftBox>
          <Box
            style={{
              //   background: "red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Img src={item.url} alt="product" />
            <GroupButton />
          </Box>
          <Box style={{ margin: 20 }}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>
              Seller:SuperComNet
              <Box component="span">
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: 55, marginLeft: 10 }}
                />
              </Box>
            </SmallText>
            <Typography style={{ margin: "10px 0" }}>
              <Box
                component="span"
                style={{ fontSize: 18, marginRight: 10, fontWeight: 600 }}
              >
                ₹{item.price.cost}
              </Box>
              <Box
                component="span"
                style={{ color: "#878787", marginRight: 10 }}
              >
                <strike>₹{item.price.mrp}</strike>
              </Box>
              <Box component="span" style={{ color: "#388E3C" }}>
                {item.price.discount} off
              </Box>
            </Typography>
            <Remove
              onClick={() => {
                handleOpenAlert();
              }}
            >
              Remove
            </Remove>
          </Box>
        </LeftBox>
        <RightBox></RightBox>
      </Box>
      {/* alert dialog when user click on remove item */}
      <Dialog open={open} onClose={handleOpenAlert}>
        <DialogTitle id="alert-dialog-title">Remove Item</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelBtn onClick={handleOpenAlert}>Cancel</CancelBtn>
          <RemoveBtn
            onClick={() => {
              handleRemove(item.id);
              handleOpenAlert();
            }}
            autoFocus
            sx={hoverEfffect}
          >
            Remove
          </RemoveBtn>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CartItem;
