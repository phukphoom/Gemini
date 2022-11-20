import React from "react";
import {
  Button as MatButton,
  ButtonProps as MatButtonProps,
} from "@mui/material";

const Button = React.forwardRef<HTMLButtonElement, MatButtonProps>(
  (props, ref) => {
    return (
      <MatButton
        {...props}
        className={`normal-case font-bold ${props.className}`}
        disableElevation
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
