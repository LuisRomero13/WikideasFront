import React from "react";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import "./styles/Home.css";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      {/* <Navbar theme="light"/> */}
      <Header />
      <div className="themes" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default Home;
