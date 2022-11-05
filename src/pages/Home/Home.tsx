import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./styles/Home.css";
import { FaMicrochip, FaBookReader, FaVideo } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi";
import { ImBinoculars } from "react-icons/im";
import {Card} from '../../components/Card'
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Header />
      <div className="themes">
        <h2 className="themes__title">Temas</h2>

        <div className="themes__container">
          <Button text="Tecnología" icon={<FaMicrochip />} color="blue" />
          <Button text="Politica" icon={<FaBookReader />} color="orange" />
          <Button text="Ciencia" icon={<HiBeaker />} color="green" />
          <Button text="Cine y Arte" icon={<FaVideo />} color="lightPink" />
          <Button text="Curiosidades" icon={<ImBinoculars />} color="darkPink" />
        </div>

        <h2 className="themes__title">Temas más populares</h2>
        <div className="themes__cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <h2 className="themes__title">Explora</h2>
        <div className="themes__cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Home;
