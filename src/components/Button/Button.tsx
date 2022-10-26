import React from "react";
import tecIcon from "../../assets/tec-icon.svg";
import "./styles/Button.css";

export interface ButtonInterface {
  text: string;
}

const Button: React.FC<ButtonInterface> = ({ text }) => {
  return (
    <button className="button">
      {text}
      <img src={tecIcon} alt="tec-icon" className="button__icon" />
    </button>
  );
};

export default Button;
