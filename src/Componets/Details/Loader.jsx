import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
const Container = styled(Box)`
  height: 90vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loader = () => {
  return (
    <Container>
      <CircularProgress disableShrink />
    </Container>
  );
};
export default Loader;
