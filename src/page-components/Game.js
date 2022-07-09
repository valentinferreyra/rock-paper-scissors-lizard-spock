import React from "react";

import piedra from "../img/piedra.png";
import papel from "../img/papel.png";
import tijera from "../img/tijera.png";
import lagarto from "../img/lagarto.png";
import spock from "../img/spock.png";

const elecciones = [
  {
    nombre: "Piedra",
    imagen: piedra,
    leGanaA: ["Lagarto", "Tijera"],
  },
  {
    nombre: "Papel",
    imagen: papel,
    leGanaA: ["Piedra", "Spock"],
  },
  {
    nombre: "Tijera",
    imagen: tijera,
    leGanaA: ["Lagarto", "Papel"],
  },
  {
    nombre: "Lagarto",
    imagen: lagarto,
    leGanaA: ["Spock", "Papel"],
  },
  {
    nombre: "Spock",
    imagen: spock,
    leGanaA: ["Tijera", "Piedra"],
  },
];

/**
 * 
 * 
 * 
    Tijera corta a Papel
    Papel tapa a Piedra
    Piedra aplasta a Lagarto
    Lagarto envenena a Spock
    Spock rompe a Tijera
    Tijera decapita a Lagarto
    Lagarto devora a Papel
    Papel desautoriza a Spock
    Spock vaporiza a Piedra
    y como siempre, Piedra aplasta a Tijera

{
    valor: "Tijera",
    ganaA: ["Papel", "Lagarto"],
    pierdeCon: ["Piedra", "Spock"]
}

if(player1.choice.valor === player2.choice.valor) { empate }
elseif(player1.choise.leGanaA(player2.choice)) { player1 }
else { player2 }


 * 
 * 
 * 
 * 
 */

const Game = () => {
  return <h1>Game</h1>;
};

export default Game;
