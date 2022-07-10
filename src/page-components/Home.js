import React from "react";
import { Link } from "react-router-dom";
import Multiplayer from "../img/svg/Multiplayer";
import Singleplayer from "../img/svg/Singleplayer";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-container__title">¡Bienvenido!</h1>
      <div className="game-mode-container">
        <p className="game-mode-container__title">Elige el modo de juego</p>
        <div className="game-mode-container__buttons">
          <Link to="/game?singlePlayer=true">
            <Singleplayer />
          </Link>
          <Link to="/game?singlePlayer=false">
            <Multiplayer />
          </Link>
        </div>
        <Link to="/rules" className="game-mode-container__rules">
          ¿No conoces las reglas?
        </Link>
      </div>
    </div>
  );
};

export default Home;
