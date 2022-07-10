import React from "react";
import { selections } from "../utils/selections";

const SelectOption = ({ player, setPlayer, visible }) => {
  if (player.currentChoice) {
    return <h1>{visible ? player.currentChoice.name : "?"}</h1>;
  }

  return (
    <div>
      {selections.map((choice) => (
        <button
          onClick={() => setPlayer({ ...player, currentChoice: choice })}
          key={choice.name}
        >
          <img src={choice.image} alt={choice.name} />
        </button>
      ))}
    </div>
  );
};

export default SelectOption;
