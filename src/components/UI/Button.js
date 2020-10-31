import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ children, onClick, style }) => {
  return (
    <>
      <style type="text/css">
        {`
        .btn-outline-primary {
          border-color: orange;
          color: orange;
          font-size:0.8rem;
          
        }
        .btn-outline-primary:hover{
          border-color: orange;
          background-color:orange;
          color:white
        }

    `}
      </style>
      <Button variant="outline-primary" style={style} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
