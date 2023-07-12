import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const Container = styled(Grid)`
  margin-top: 3.4rem;
  padding: 30px 135px;
`;
const Component = styled(Grid)`
  border: 1px solid #f0f0f0;
  background: #fff;
`;
const Header = styled(Box)`
  padding: 15px 24px;
  border-bottom: 1px solid #f0f0f0;
`;
const CenterBox = styled(Box)`
  border: 1px solid #f0f0f0;
  background: #fff;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #f0f0f0;
`;
const Text = styled(Typography)`
  margin-top: 10px;
`;
const IMG = styled("img")({
  height: "45%",
});
const ShopNow = styled(Button)`
  font-size: 16px;
  background: #2874f0;
  border: 1px solid #2874f0;
  color: white;
  border-radius: 2px;
  padding: 6px 65px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  font-size: 14px;
  text-transform: none;
  margin-top: 20px;
`;
const hoverEfffect = {
  background: "#2874f0",
  "&:hover": {
    background: "#2874f0",
  },
};
const IMGURL =
  "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container container>
        <Component item lg={12} md={12} sm={12} xs={12}>
          <Header>
            <Typography>My cart</Typography>
          </Header>

          <CenterBox>
            <IMG src={IMGURL} alt="Empty card" />
            <Text>Your cart is empty!</Text>
            <Text style={{ fontSize: 12 }}>Add items to it now.</Text>
            <ShopNow
              sx={hoverEfffect}
              onClick={() => {
                navigate("/");
              }}
            >
              Shop now
            </ShopNow>
          </CenterBox>
        </Component>
      </Container>
    </>
  );
};
export default EmptyCart;
