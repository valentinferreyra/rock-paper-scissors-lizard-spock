import React, { useEffect, useState } from "react";
import SelectOption from "../components/SelectOption";
import { calculateWinner } from "../utils/calculateWinner";
import { randomOption } from "../utils/randomOption";

const Game = () => {
  const singlePlayer = true;

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(singlePlayer ? randomOption() : null);
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (player1 && player2) {
      setTimeout(() => {
        setVisible(true);
        setWinner(calculateWinner(player1, player2));
      }, 1000);
    }
  }, [player1, player2]);

  return (
    <div>
      <h1>J1</h1>
      <SelectOption player={player1} setPlayer={setPlayer1} visible={visible} />
      <h1>J2</h1>
      <SelectOption player={player2} setPlayer={setPlayer2} visible={visible} />
      {winner && <p>{winner === "empate" ? "empate" : winner.nombre}</p>}
    </div>
  );
};

export default Game;
