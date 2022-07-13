import React, { useState } from "react";
import { selections } from "../utils/selections";

const SelectOption = ({ player, setPlayer, visible }) => {
  const [viewOption, setViewOption] = useState(false);

  const selectChoice = (choice) => {
    setPlayer({ ...player, currentChoice: choice });
    setViewOption(false);
  };

  if (!viewOption) {
    return (
      <div className="select-option">
        <div className="select-option__description">
          <p>{player.name}</p>
          <p>Puntos: {player.score}</p>
        </div>
        <button
          className={`select-option__view-option ${
            player.isCurrentWinner ? "select-option__view-option-winner" : ""
          }`}
          onClick={() =>
            player.currentChoice ? {} : setViewOption(!viewOption)
          }
        >
          {player.currentChoice && visible ? (
            <img
              src={player.currentChoice.image}
              alt={player.currentChoice.name}
            />
          ) : (
            <p>{player.currentChoice ? "..." : "?"}</p>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="select-option">
      <div className="select-option__options">
        {viewOption &&
          selections.map((choice) => (
            <button onClick={() => selectChoice(choice)} key={choice.name}>
              <img src={choice.image} alt={choice.name} />
              <h1>{choice.name}</h1>
            </button>
          ))}
      </div>
    </div>
  );
};

export default SelectOption;
