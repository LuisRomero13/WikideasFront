import React from "react";
import "./styles/Logo.css";
export interface LogoInterface {
  theme: "light" | "dark";
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Logo: React.FC<LogoInterface> = ({ theme, onClick }) => {
  return (
    <div
      className={`logo ${theme === "light" ? "logo--light" : "logo--dark"}`}
      onClick={onClick}
    >
      <p>WIAS</p>
    </div>
  );
};

export default Logo;
