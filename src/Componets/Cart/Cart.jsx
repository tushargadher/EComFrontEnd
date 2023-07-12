import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";
const Component = styled(Grid)(({ theme }) => ({
  marginTop: "3.4rem",
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
    marginTop: "6.4rem",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  border: "1px solid #f0f0f0",
  background: "#fff",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));
const Header = styled(Box)`
  padding: 15px 24px;
  border-bottom: 1px solid #f0f0f0;
`;
const ButtonWrap = styled(Box)`
  border-top: 1px solid #f0f0f0;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`;
const OrderButton = styled(Button)`
  background: #fb641b;
  margin-right: 20px;
  color: white;
  height: 51px;
  width: 250px;
  border-radius: 2px;
`;
const hoverEfffect = {
  background: "#fb641b",
  "&:hover": {
    background: "#fb641b",
  },
};
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={8} md={8} sm={12} xs={12}>
            <Header>
              <Typography>My cart ({cartItems.length})</Typography>
            </Header>
            {/* displaying all item in cart */}
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrap>
              <OrderButton sx={hoverEfffect}>PLACE ORDER</OrderButton>
            </ButtonWrap>
          </LeftComponent>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;
