"use client";
import { Button } from "@mui/material";
import classes from "./button.module.scss";

const SecondaryButton = ({ children, ...props }) => {
  return (
    <Button className={classes["secondary"]} variant="outlined" {...props}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
