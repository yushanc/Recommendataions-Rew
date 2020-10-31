import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
