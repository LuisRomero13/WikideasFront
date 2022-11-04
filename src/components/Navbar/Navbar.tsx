import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { NavbarLinks } from "../NavbarLinks";
import "./styles/Navbar.css";
export interface NavbarInterface {
  theme: "light" | "dark";
}

const Navbar: React.FC<NavbarInterface> = ({ theme }) => {
  const navigate = useNavigate();
  return (
    <nav
      className={`navbar ${
        theme === "light" ? "navbar--light" : "navbar--dark"
      }`}
    >
      <div className="div1">
        <Logo
          theme={`${theme === "light" ? "light" : "dark"}`}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="div2">
        <NavbarLinks theme={`${theme === "light" ? "light" : "dark"}`} />
      </div>
    </nav>
  );
};

export default Navbar;
