import piedra from "../img/piedra.png";
import papel from "../img/papel.png";
import tijera from "../img/tijera.png";
import lagarto from "../img/lagarto.png";
import spock from "../img/spock.png";

export const selections = [
  {
    name: "Piedra",
    image: piedra,
    betterThan: ["Lagarto", "Tijera"],
  },
  {
    name: "Papel",
    image: papel,
    betterThan: ["Piedra", "Spock"],
  },
  {
    name: "Tijera",
    image: tijera,
    betterThan: ["Lagarto", "Papel"],
  },
  {
    name: "Lagarto",
    image: lagarto,
    betterThan: ["Spock", "Papel"],
  },
  {
    name: "Spock",
    image: spock,
    betterThan: ["Tijera", "Piedra"],
  },
];
