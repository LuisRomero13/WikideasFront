import React from "react";
import "./styles/Logo.css";
export interface LogoInterface {
  theme: "light" | "dark";
}

const Logo: React.FC<LogoInterface> = ({ theme }) => {
  return (
    <div className={`logo ${theme === "light" ? "logo--light" : "logo--dark"}`}>
      <p>WIAS</p>
    </div>
  );
};

export default Logo;
