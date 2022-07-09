import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/game?singlePlayer=true">Un jugador</Link>
      <Link to="/game?singlePlayer=false">Dos jugadores</Link>
    </div>
  );
};

export default Home;
