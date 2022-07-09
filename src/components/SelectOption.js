import React from "react";
import { selections } from "../utils/selections";

const SelectOption = ({ playerChoice, setPlayerChoice, visible }) => {
  if (playerChoice) {
    return <h1>{visible ? playerChoice.name : "?"}</h1>;
  }

  return (
    <div>
      {selections.map((choice) => (
        <button onClick={() => setPlayerChoice(choice)}>
          <img src={choice.image} alt={choice.name} />
        </button>
      ))}
    </div>
  );
};

export default SelectOption;
