"use client";

import classes from "./Button.module.css";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "null"
    | "invalid"
    | "delete"
    | "black"
    | "white";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
}: ButtonPropTypes) => {
  // Context
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : type === "null"
          ? classes.null
          : type === "invalid"
          ? classes.invalid
          : type === "delete"
          ? classes.delete
          : type === "black"
          ? classes.black
          : type === "white"
          ? classes.white
          : classes.primary
      }`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size="1.5rem" color="inherit" /> : children}
    </button>
  );
};

export default Button;
