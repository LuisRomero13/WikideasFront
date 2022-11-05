import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./styles/Home.css";
import { FaMicrochip, FaBookReader, FaVideo } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi";
import { ImBinoculars } from "react-icons/im";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Header />
      <div className="themes">
        <h1>Temas</h1>

        <div className="themes__container">
          <Button text="Tecnología" icon={<FaMicrochip />} color="blue" />
          <Button text="Politica" icon={<FaBookReader />} color="orange" />
          <Button text="Ciencia" icon={<HiBeaker />} color="green" />
          <Button text="Cine y Arte" icon={<FaVideo />} color="lightPink" />
          <Button text="Curiosidades" icon={<ImBinoculars />} color="darkPink" />
        </div>
      </div>
    </div>
  );
};

export default Home;
