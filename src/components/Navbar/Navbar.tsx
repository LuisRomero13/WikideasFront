import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import "./styles/Navbar.css";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <nav className="navbar">
      <div className="div1">
        <Logo theme="light" />
      </div>
      <div className="div2">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/buscarTemas"
            >
              Buscar temas
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/crearTema"
            >
              Crear un tema
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/debates"
            >
              Debates
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/historial"
            >
              Historial
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
