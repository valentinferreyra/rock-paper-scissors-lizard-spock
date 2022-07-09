import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SelectOption from "../components/SelectOption";
import { calculateWinner } from "../utils/calculateWinner";
import { randomOption } from "../utils/randomOption";
import queryString from "query-string";

const Game = () => {
  const { singlePlayer } = queryString.parse(useLocation().search);

  const defaultOption = singlePlayer === "true" ? randomOption() : null;

  const [firstPlayerChoice, setFirstPlayerChoice] = useState(null);
  const [secondPlayerChoice, setSecondPlayerChoice] = useState(defaultOption);
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (firstPlayerChoice && secondPlayerChoice) {
      setTimeout(() => {
        setVisible(true);
        setWinner(calculateWinner(firstPlayerChoice, secondPlayerChoice));
      }, 1000);
    }
  }, [firstPlayerChoice, secondPlayerChoice]);

  return (
    <div>
      <h1>J1</h1>
      <SelectOption
        playerChoice={firstPlayerChoice}
        setPlayerChoice={setFirstPlayerChoice}
        visible={visible}
      />
      <h1>J2</h1>
      <SelectOption
        playerChoice={secondPlayerChoice}
        setPlayerChoice={setSecondPlayerChoice}
        visible={visible}
      />
      {winner && <p>{winner === "empate" ? "empate" : winner.name}</p>}
    </div>
  );
};

export default Game;
