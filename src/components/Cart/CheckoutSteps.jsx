import { Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React from "react";

import "./shipping.css"


export default function CheckoutSteps({ activeStep }) {
  const steps = [
    {
      label: <Typography> Shipping Details</Typography>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <Typography> Confirm Order</Typography>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <Typography> Payment </Typography>,
      icon: <AccountBalanceWalletIcon />,
    },
  ];

  const style ={
    boxSizing : "border-box",
    padding : "2vmax"
  }
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={style}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}
