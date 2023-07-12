import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const DialogText = styled(Typography)`
  color: black;
  font-size: 14px;
  display: flex;
  margin-top: 10px;
`;
const Dot = styled(FiberManualRecordIcon)`
  font-size: 14px;
  margin-right: 6px;
`;
const WarrantyDialog = ({ openWarranty, handleWarrantyDialog }) => {
  return (
    <>
      <Dialog open={openWarranty} onClose={handleWarrantyDialog}>
        <DialogTitle>Warranty Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <DialogText style={{ fontWeight: 600 }}>1 Year Warranty</DialogText>
            <DialogText style={{ fontWeight: 600 }}>
              Covered in Warranty
            </DialogText>
            <DialogText style={{ opacity: 0.9 }}>
              <Dot /> Warranty of the Product Is Limited to Only Manufacturing
              Defects Items
            </DialogText>

            <DialogText style={{ fontWeight: 600 }}>
              Not Covered in Warranty
            </DialogText>
            <DialogText style={{ opacity: 0.9 }}>
              <Dot /> Warranty Does Not Cover Any External Accessories (Such As
              Battery, Cable, Carrying Bag), Damage Caused to the Product Due to
              Improper Installation by Customer
            </DialogText>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default WarrantyDialog;
