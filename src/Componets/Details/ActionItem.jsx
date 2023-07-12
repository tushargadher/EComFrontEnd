import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
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
const LeftContainer = styled(Box)(({ theme }) => ({
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));
const ImgWrap = styled(Box)`
  padding: 15px 20px;
  border: 1px solid #f0f0f0;
  width: 90%;
`;
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
        <LeftContainer>
          <ImgWrap>
            <img src={product.detailUrl} style={{ width: "100%" }} />
          </ImgWrap>
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
        </LeftContainer>
      </ThemeProvider>
    </>
  );
};
export default ActionItem;
