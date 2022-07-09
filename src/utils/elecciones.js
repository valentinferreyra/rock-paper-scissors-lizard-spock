import piedra from "../img/piedra.png";
import papel from "../img/papel.png";
import tijera from "../img/tijera.png";
import lagarto from "../img/lagarto.png";
import spock from "../img/spock.png";

export const elecciones = [
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
