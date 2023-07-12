import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const DialogText = styled(Typography)`
  color: black;
  font-size: 14px;
`;

let date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 100); //   (days hours minutes second milisecond)
const DeliveryDialog = ({ openDelivery, handleDelivaryDialog }) => {
  return (
    <>
      <Dialog open={openDelivery} onClose={handleDelivaryDialog}>
        <DialogTitle>Delivery & Installation details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <DialogText style={{ fontWeight: 600 }}>
              Delivery By {date.toDateString()} | ₹40
            </DialogText>
            <DialogText style={{ marginTop: 10, opacity: 0.8 }}>
              Shipping Charges For Flipkart Assured Items
            </DialogText>
            <DialogText style={{ marginTop: 10 }}>
              Shipping charges are calculated based on the number of units,
              distance and delivery date.
            </DialogText>
            <DialogText style={{ marginTop: 10 }}>
              If the total value of items is more than Rs 500, Shipping is Free
              If the total value of items is less than Rs 500, Seller may choose
              to levy shipping charges
            </DialogText>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default DeliveryDialog;
