import React from "react";
import "./styles/NavbarLinks.css";
import { NavLink } from "react-router-dom";
export interface NavbarLinksInterface {
  theme: "light" | "dark";
}

const NavbarLinks: React.FC<NavbarLinksInterface> = ({ theme }) => {
  return (
    <ul>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            `navbar__link ${
              theme === "light" ? "navbar__link--light" : "navbar__link--dark"
            } ${isActive ? "active" : ""}`
          }
          to="/buscarTema"
        >
          Buscar temas
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `navbar__link ${
              theme === "light" ? "navbar__link--light" : "navbar__link--dark"
            } ${isActive ? "active" : ""}`
          }
          to="/crearTema"
        >
          Crear un tema
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `navbar__link ${
              theme === "light" ? "navbar__link--light" : "navbar__link--dark"
            } ${isActive ? "active" : ""}`
          }
          to="/debates"
        >
          Debates
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `navbar__link ${
              theme === "light" ? "navbar__link--light" : "navbar__link--dark"
            } ${isActive ? "active" : ""}`
          }
          to="/historial"
        >
          Historial
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarLinks;
