import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const Container = styled(Box)`
  border: 1px solid #f0f0f0;
  background: #fff;
`;
const Heading = styled(Box)`
  padding: 15px 24px;
  border-bottom: 1px solid #f0f0f0;
  color: #878787;
`;
const Component = styled(Box)`
  padding: 15px 24px;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;
const Price = styled(Box)`
  float: right;
`;
const Discount = styled(Typography)`
  color: green;
  padding-top: 20px;
  border-top: 2px dotted #f0f0f0;
  font-weight: 600;
`;
const TotalBalance = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliverycharge, setDeliveryCharge] = useState(0);
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0,
      deliverycharge = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
      deliverycharge += 40;
    });
    setPrice(price);
    setDiscount(discount);
    setDeliveryCharge(deliverycharge);
  };
  return (
    <>
      <Container>
        <Heading>PRICE DETAILS</Heading>
        <Component>
          <Typography>
            Price ({`${cartItems.length} item`}){" "}
            <Price component="span">₹{price}</Price>
          </Typography>
          <Typography>
            Discount
            <Price component="span" style={{ color: "green" }}>
              -₹{discount}
            </Price>
          </Typography>
          <Typography>
            Delivery Charges
            <Price component="span">₹{deliverycharge}</Price>
          </Typography>
          <Typography variant="h6">
            Total Amount{" "}
            <Price component="span">₹{price - discount + deliverycharge}</Price>
          </Typography>
          <Discount>
            You will save ₹{discount - deliverycharge} on this order
          </Discount>
        </Component>
      </Container>
    </>
  );
};
export default TotalBalance;
