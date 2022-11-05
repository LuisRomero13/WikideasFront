import React from "react";
import tecIcon from "../../assets/tec-icon.svg";
import "./styles/Button.css";

export interface ButtonInterface {
  text: string;
  icon?: React.ReactNode;
  color?: "orange" | "blue" | "green" | "lightPink" | "darkPink";
}

const Button: React.FC<ButtonInterface> = ({ text, icon, color }) => {
  return (
    <button className={`button ${color ? `button--${color}` : ""}`}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
