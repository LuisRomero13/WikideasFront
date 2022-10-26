import React from "react";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import "./styles/Home.css";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="themes"></div>
    </div>
  );
};

export default Home;
