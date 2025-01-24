"use client";
import { Button } from "@mui/material";
import classes from "./button.module.scss";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      className={classes["primary"]}
      {...props}
      fullWidth
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
