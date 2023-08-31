import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { DataState } from "../../../context/DataProvider";
import "react-toastify/dist/ReactToastify.css";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  // width: "90vw",
  height: "70vh",
  [theme.breakpoints.down("md")]: {
    // flexDirection: "column",
    width: "100%",
  },
}));

const Img = styled(Box)(({ theme }) => ({
  background:
    "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
  display: "flex",
  flexDirection: "column",
  color: "white",
  padding: "45px 35px",
  height: "82.7%",
  width: "40%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "25px 25px",
  // alignItems: "center",
  [theme.breakpoints.down("md")]: {
    // backgroundColor: "red",
    // width: "50%",
    padding: "20px",
  },
}));
const LoginButton = styled(Button)`
  text-transform: none;
  border-radius: 2px;
  height: 3rem;
  background: #fb641b;
  color: #fff;
`;
const RequestOtp = styled(Button)`
  text-transform: none;
  border-radius: 2px;
  height: 3rem;
  background: #fff;
  color: #2874f0;
  box-shodow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 0.75rem;
  color: #878787;
`;
const HighLightText = styled(Typography)`
  font-size: 0.75rem;
  color: #2874f0;
`;
const Error = styled(Typography)`
  font-size: 0.75rem;
  color: red;
`;
const CreateAccount = styled(Typography)`
  font-size: 0.75rem;
  color: #2874f0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;
const hoverEfffect = {
  background: "#fb641b",
  "&:hover": {
    background: "#fb641b",
  },
};

const signupintitialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
const loginintitialValues = {
  email: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signup, setSignup] = useState(signupintitialValues);
  const [login, setLogin] = useState(loginintitialValues);
  const [error, setError] = useState(false);
  const { setLoggedUser, server } = DataState();

  const handleOnchange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const handleOnchangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleSingUp = async () => {
    try {
      const { name, email, password, phone } = signup;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      //api call
      const { data } = await axios.post(
        `${server}/signup`,
        {
          name, //if both key and value have same name then we can write only onces
          email,
          password,
          phone,
        },
        config
      );
      // console.log(data);
      setSignup(signupintitialValues);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleLogin = async () => {
    setError(false);
    try {
      const { email, password } = login;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      //api call
      const { data } = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        config
      );
      setError(false);
      // localStorage.setItem("userInfo", JSON.stringify(data));
      setLoggedUser(data.name);
      setLogin(loginintitialValues);
      handleClose();
      console.log(data);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      {/* <ToastContainer position="bottom-center" /> */}
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }} //for removing the by default width of Dialog
      >
        <Component>
          {/* if isSignUp is true then we will display signup Form else will display login form */}
          {isSignUp ? (
            <>
              {/* signup form */}
              <Img>
                <Typography variant="h5">
                  Looks like you're new here!
                </Typography>
                <Typography marginTop="20px">
                  Sign up with your mobile number to get started
                </Typography>
              </Img>
              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter Name"
                  onChange={(e) => handleOnchange(e)}
                  name="name"
                  value={signup.name}
                />
                <TextField
                  variant="standard"
                  label="Enter Email"
                  onChange={(e) => handleOnchange(e)}
                  name="email"
                  value={signup.email}
                />
                <TextField
                  variant="standard"
                  label="Enter Password"
                  onChange={(e) => handleOnchange(e)}
                  name="password"
                  type="password"
                  value={signup.password}
                />
                <TextField
                  variant="standard"
                  label="Enter Phone"
                  onChange={(e) => handleOnchange(e)}
                  name="phone"
                  value={signup.phone}
                />
                <Text>
                  By continuing, you agree to Flipkart's
                  <HighLightText component="span"> Terms of Use </HighLightText>
                  and{" "}
                  <HighLightText component="span">
                    Privacy Policy.
                  </HighLightText>
                </Text>
                <LoginButton
                  variant="contained"
                  onClick={handleSingUp}
                  sx={hoverEfffect}
                >
                  Continue
                </LoginButton>

                <RequestOtp
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                  }}
                >
                  Existing User? Log in
                </RequestOtp>
              </Wrapper>
            </>
          ) : (
            <>
              {/* login form */}
              <Img>
                <Typography variant="h5">Login</Typography>
                <Typography marginTop="20px">
                  Get access to your Orders, Wishlist and Recommendations
                </Typography>
              </Img>
              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter Email"
                  name="email"
                  onChange={(e) => handleOnchangeLogin(e)}
                  value={login.email}
                />
                <TextField
                  variant="standard"
                  label="Enter Password"
                  type="password"
                  name="password"
                  onChange={(e) => handleOnchangeLogin(e)}
                  value={login.password}
                />
                {error && <Error>Please Cheack Your Email or Password</Error>}

                <Text>
                  By continuing, you agree to Flipkart's
                  <HighLightText component="span">Terms of Use </HighLightText>
                  and{" "}
                  <HighLightText component="span">
                    Privacy Policy.
                  </HighLightText>
                </Text>
                <LoginButton
                  variant="contained"
                  onClick={handleLogin}
                  sx={hoverEfffect}
                >
                  Login
                </LoginButton>
                <Typography style={{ textAlign: "center" }}>or</Typography>
                <RequestOtp variant="contained">Request OTP</RequestOtp>
                <CreateAccount
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                  }}
                >
                  New to Flipkart? Create an account
                </CreateAccount>
              </Wrapper>
            </>
          )}
        </Component>
      </Dialog>
    </>
  );
};
export default LoginDialog;
