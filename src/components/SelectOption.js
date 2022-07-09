import React from "react";
import { elecciones } from "../utils/elecciones";

const SelectOption = ({ player, setPlayer, visible }) => {
  if (player) {
    return <h1>{visible ? player.nombre : "?"}</h1>;
  }

  return (
    <div>
      {elecciones.map((eleccion) => (
        <button onClick={() => setPlayer(eleccion)}>
          <img src={eleccion.imagen} alt={eleccion.nombre} />
        </button>
      ))}
    </div>
  );
};

export default SelectOption;
