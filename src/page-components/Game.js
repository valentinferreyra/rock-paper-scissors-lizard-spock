import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (firstPlayerChoice && secondPlayerChoice) {
      setTimeout(() => {
        var winner = calculateWinner(firstPlayerChoice, secondPlayerChoice);
        setVisible(true);
        setWinner(winner);
        if (winner.name === firstPlayerChoice.name) {
          setFirstPlayerScore(firstPlayerScore + 1);
        }
        if (winner.name === secondPlayerChoice.name) {
          setSecondPlayerScore(secondPlayerScore + 1);
        }
      }, 1000);
    }
  }, [firstPlayerChoice, secondPlayerChoice]);

  const playNextRound = () => {
    setVisible(false);
    setFirstPlayerChoice(null);
    setSecondPlayerChoice(defaultOption);
  };

  const playAgain = () => {
    playNextRound();
    setFirstPlayerScore(0);
    setSecondPlayerScore(0);
  };

  return (
    <div>
      <h1>J1: {firstPlayerScore}</h1>
      <SelectOption
        playerChoice={firstPlayerChoice}
        setPlayerChoice={setFirstPlayerChoice}
        visible={visible}
      />
      <h1>
        {singlePlayer === "true" ? "Sheldon" : "J2"}: {secondPlayerScore}
      </h1>
      <SelectOption
        playerChoice={secondPlayerChoice}
        setPlayerChoice={setSecondPlayerChoice}
        visible={visible}
      />
      {winner && (
        <div>
          <p>{winner === "empate" ? "empate" : winner.name}</p>
          <button onClick={() => playNextRound()}>Siguiente</button>
          <button onClick={() => playAgain()}>Jugar de nuevo</button>
          <Link to="/">Volver a inicio</Link>
        </div>
      )}
    </div>
  );
};

export default Game;
