import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { payUsingPaytm } from "../Services/api";
import { addTocard } from "../../../Redux/Actions/cartAction";
import { post } from "../../../utils/paytm";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const Container = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
  },
}));
const ImgWrap = styled(Box)(({ theme }) => ({
  padding: "20px",
  border: "1px solid #f0f0f0",
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  }, 
}));
const BtnWrap = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  width: "90%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  }, 
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const ActionItem = ({ product }) => {
  // in react we need to initial the custom hook to use it
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = product;
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = () => {
    dispatch(addTocard(id, quantity));
    navigate("/cart");
  };
  const buyNow = async () => {
    const respose = await payUsingPaytm({
      amount: 500,
      email: "tushargadher123@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: respose,
    };
    post(information);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <ImgWrap>
            <img src={product.detailUrl} style={{ width: "100%" }} />
          </ImgWrap>
          <BtnWrap>
            <StyledButton
              variant="contained"
              style={{ background: "#FF9F00", marginRight: 10 }}
              onClick={() => addItemToCart()}
            >
              <ShoppingCartIcon />
              Add to cart
            </StyledButton>
            <StyledButton
              variant="contained"
              style={{ background: "#FB641B" }}
              onClick={() => {
                buyNow();
              }}
            >
              <FlashOnIcon />
              Buy now
            </StyledButton>
          </BtnWrap>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default ActionItem;
