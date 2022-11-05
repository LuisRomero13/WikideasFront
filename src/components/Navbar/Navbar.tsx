import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { NavbarLinks } from "../NavbarLinks";
import "./styles/Navbar.css";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (ref.current) {
      if (window.scrollY > 0) {
        setTheme("dark");
        ref.current.style.zIndex = "9";
      } else {
        setTheme("light");
        ref.current.style.zIndex = "0";
      }
    }
  };
  return (
    <nav
      className={`navbar ${
        theme === "light" ? "navbar--light" : "navbar--dark"
      }`}
      ref={ref}
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
