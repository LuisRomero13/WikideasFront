import React from "react";
import "./styles/Card.css";
import { Link } from "react-router-dom";
import {BsArrowRight} from 'react-icons/bs'
export interface CardInterface {}

const Card: React.FC<CardInterface> = () => {
  return (
    <div className="card">
      <img
        src="https://img.freepik.com/foto-gratis/textura-pared-estuco-azul-marino-relieve-decorativo-abstracto-grunge-fondo-color-rugoso-gran-angular_1258-28311.jpg"
        alt="..."
      />
      <div className="card-body">
		<span className="card-date">
			10-octubre-2022
		</span>
        <h3 className="card-title">Título</h3>
        <p className="card-text">
          Descripción breve sobre de que trata el blog que llame la atención al
          usuario.
        </p>
        <Link className="link" to={``}>Ver tema <BsArrowRight/></Link>
      </div>
    </div>
  );
};

export default Card;
