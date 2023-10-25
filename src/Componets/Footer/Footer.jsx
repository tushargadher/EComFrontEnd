import React from "react";
import { Box, Typography, Divider, styled } from "@mui/material";
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#212121",
  height: "43vh",
}));
const UpperSection = styled(Box)(({ theme }) => ({
  height: "80%",
  padding: "3rem 4rem",
  display: "flex",
  justifyContent: "space-around",
}));
const LowerSection = styled(Box)(({ theme }) => ({
  // height: "20%",
}));
const SubSection = styled(Box)(({ theme }) => ({
  width: "14%",
  // backgroundColor: "blue",
}));
const RightSection = styled(Box)(({ theme }) => ({
  width: "18%",
  // backgroundColor: "blue",
}));

const Text = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "0.8rem",
  color: "#878787",
  marginBottom: "0.5rem",
}));
const Subtext = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  color: "white",
}));

const Ui = styled("ui")({
  fontSize: "0.8rem",
  listStyleType: "none",
  color: "white",
});
const Li = styled("li")({
  marginBottom: "1px",
});
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <UpperSection>
          <SubSection>
            <Text>About</Text>
            <Ui>
              <Li>Contact Us</Li>
              <Li>About Us</Li>
              <Li>Careers</Li>
              <Li>FlipKart Stories</Li>
              <Li>Press</Li>
              <Li>FlipKart Wholesale</Li>
              <Li>Cleartrip</Li>
              <Li>Corporate Information</Li>
            </Ui>
          </SubSection>
          <SubSection>
            <Text>Help</Text>
            <Ui>
              <Li>Payments</Li>
              <Li>Shipping</Li>
              <Li>Cancellation & Returns</Li>
              <Li>FAQ</Li>
              <Li>Report Infringement</Li>
            </Ui>
          </SubSection>
          <SubSection>
            <Text>Consumer Policy</Text>
            <Ui>
              <Li>Cancellation & Returns</Li>
              <Li>Terms Of Use</Li>
              <Li>Security</Li>
              <Li>Privacy</Li>
              <Li>Sitemap</Li>
              <Li>Grievance Redressal</Li>
              <Li>EPR Compliance</Li>
            </Ui>
          </SubSection>
          <SubSection>
            <Text>Social</Text>
            <Ui>
              <Li>Facebook</Li>
              <Li>Twitter</Li>
              <Li>YouTube</Li>
            </Ui>
          </SubSection>
          <Divider sx={{ backgroundColor: "#878787" }} orientation="vertical" />
          <RightSection>
            <Text>Mail Us:</Text>
            <Subtext>
              Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove
              Embassy Tech Village,Outer Ring Road, Devarabeesanahalli
              Village,Bengaluru, 560103,Karnataka, India
            </Subtext>
          </RightSection>
          <RightSection>
            <Text>Registered Office Address</Text>
            <Ui>
              <Subtext>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India CIN:
                U51109KA2012PTC066107 Telephone: 044-45614700
              </Subtext>
            </Ui>
          </RightSection>
        </UpperSection>
        <Divider sx={{ backgroundColor: "#878787" }} />

        <LowerSection></LowerSection>
      </FooterContainer>
    </>
  );
};
export default Footer;
