import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeliveryDialog from "../Dialogs/DeliveryDialog";
import WarrantyDialog from "../Dialogs/WarrantyDialog";
const Offers = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#212121",
  marginBottom: "8px",
  // border: 1px solid red;
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

`
`;
const OfferBadge = styled(LocalOfferIcon)(({ theme }) => ({
  color: "#14be47",
  fontSize: "19px",
  // border: "1px solid red",
  marginRight: "10px",
  [theme.breakpoints.down("md")]: {
    marginRight: "6px",
  },
}));
const ShowOffer = styled(Button)`
  text-transform: none;
`;
const Span = styled(Typography)`
  color: #5183f0;
  font-size: 14px;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const ProductDetails = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";

  let date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 100); //   (days hours minutes second milisecond)
  const [showOffer, setShowOffer] = useState(false);
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openWarranty, setOpenWarranty] = useState(false);
  const handleDelivaryDialog = () => {
    setOpenDelivery(!openDelivery);
  };
  const handleWarrantyDialog = () => {
    setOpenWarranty(!openWarranty);
  };
  const FKPoint =
    "https://rukminim1.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50";
  return (
    <>
      <Box>
        <Typography>{product.title.longTitle}</Typography>
        <Typography
          style={{
            marginTop: 10,
            color: "#878787",
            fontSize: 14,
            display: "flex",
          }}
        >
          420 Rating & 2000 Review
          <Box component="span">
            <img
              src={fassured}
              alt="fassured"
              style={{ width: 77, marginLeft: 20 }}
            />
          </Box>
        </Typography>
        {/* price typography */}
        <Typography>
          <Box component="span" style={{ fontSize: 28, marginRight: 14 }}>
            ₹{product.price.cost}
          </Box>
          <Box component="span" style={{ color: "#878787", marginRight: 14 }}>
            <strike>₹{product.price.mrp}</strike>
          </Box>
          <Box component="span" style={{ color: "#388E3C" }}>
            {product.price.discount} off
          </Box>
        </Typography>

        <Typography style={{ fontWeight: 600, marginTop: 8, marginBottom: 8 }}>
          Available offers
        </Typography>
        <Offers>
          <OfferBadge /> <b>Bank Offer </b>&nbsp;Flat ₹1,250 Off on HDFC Bank
          Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999
          <Span>&nbsp;T&C</Span>
        </Offers>
        <Offers>
          <OfferBadge /> <b>Bank Offer </b>&nbsp; Flat ₹3,000 Off on HDFC Bank
          Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999{" "}
          <Span>&nbsp; T&C</Span>
        </Offers>
        <Offers>
          <OfferBadge /> <b>Bank Offer </b>&nbsp;Flat ₹4,000 Off on HDFC Bank
          Credit Card EMI Transactions on orders of ₹50,000 and above{" "}
          <Span>&nbsp; T&C</Span>
        </Offers>
        <Offers>
          <OfferBadge />
          <b> Special Price </b>&nbsp; Get extra 3% off (price inclusive of
          cashback/coupon) <Span>&nbsp; T&C</Span>
        </Offers>
        {showOffer ? (
          <>
            <Offers>
              <OfferBadge /> <b>Bank Offer </b>&nbsp;10% off on ICICI Bank
              Credit Card EMI Transactions, up to ₹1500, on orders of ₹10,000
              and above <Span>&nbsp; T&C</Span>
            </Offers>
            <Offers>
              <OfferBadge /> <b>Bank Offer </b>&nbsp; 10% off on ICICI Bank
              Debit Card EMI Transactions, up to ₹1500, on orders of ₹10,000 and
              above <Span>&nbsp; T&C</Span>
            </Offers>
            <Offers>
              <OfferBadge /> <b>Bank Offer </b>&nbsp;10% off on IndusInd Bank
              Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and
              above <Span>&nbsp; T&C</Span>
            </Offers>
            <Offers>
              <OfferBadge /> <b>Bank Offer </b>&nbsp;12% instant discount on PNB
              Credit Card, up to ₹2000, on orders of ₹5,000 and above{" "}
              <Span>&nbsp; T&C</Span>
            </Offers>
            <Offers>
              <OfferBadge /> <b>Bank Offer </b>&nbsp; 5% Cashback on Flipkart
              Axis Bank Card <Span>&nbsp; T&C</Span>
            </Offers>
            <Offers>
              <OfferBadge /> <b>Partner Offer </b>&nbsp;Purchase now & get 1
              surprise cashback coupon in Future <Span> &nbsp;Know More</Span>
            </Offers>
          </>
        ) : (
          <></>
        )}
        <ShowOffer onClick={() => setShowOffer(!showOffer)}>
          {!showOffer ? "View All Offers" : "Show Less"}
        </ShowOffer>
        <Table>
          <TableBody>
            <ColumnText>
              <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Delivery By {date.toDateString()} | ₹40
                <ShowOffer onClick={handleDelivaryDialog}>
                  View Details
                </ShowOffer>
              </TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                1 Year Warranty
                <ShowOffer onClick={handleWarrantyDialog}>Know More</ShowOffer>
              </TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color: "#878787" }}>Seller</TableCell>
              <TableCell>
                <Box component="span" style={{ color: "#2874f0" }}>
                  SuperComNet
                </Box>
                <Typography>7 Days Replacement Policy</Typography>
                <Typography>GST invoice available</Typography>
              </TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell colSpan={2}>
                <img src={FKPoint} alt="flipkartPoint" />
              </TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color: "#878787" }}>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </ColumnText>
          </TableBody>
        </Table>
      </Box>
      {/* delivery dialog */}
      <DeliveryDialog
        openDelivery={openDelivery}
        handleDelivaryDialog={handleDelivaryDialog}
      />
      {/* Warranty Dialog */}
      <WarrantyDialog
        openWarranty={openWarranty}
        handleWarrantyDialog={handleWarrantyDialog}
      />
    </>
  );
};
export default ProductDetails;
