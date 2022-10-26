import React from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <nav className="navbar">
      <div className="div1">
        <p>hola</p>
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
