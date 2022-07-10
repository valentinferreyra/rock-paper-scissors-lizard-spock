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

  const [firstPlayer, setFirstPlayer] = useState({
    name: "Jugador 1",
    currentChoice: null,
    score: 0,
  });
  const [secondPlayer, setSecondPlayer] = useState({
    name: singlePlayer === "true" ? "Sheldon" : "Jugador 2",
    currentChoice: defaultOption,
    score: 0,
  });

  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (firstPlayer.currentChoice && secondPlayer.currentChoice) {
      setTimeout(() => {
        const winner = calculateWinner(
          firstPlayer.currentChoice,
          secondPlayer.currentChoice
        );
        setVisible(true);
        setWinner(winner);
        if (winner.name === firstPlayer.currentChoice.name) {
          setFirstPlayer({ ...firstPlayer, score: firstPlayer.score + 1 });
        }
        if (winner.name === secondPlayer.currentChoice.name) {
          setSecondPlayer({ ...secondPlayer, score: secondPlayer.score + 1 });
        }
      }, 1000);
    }
  }, [firstPlayer.currentChoice, secondPlayer.currentChoice]);

  const playAgain = (isNewGame = false) => {
    setWinner(null);
    setVisible(false);
    setFirstPlayer({
      ...firstPlayer,
      currentChoice: null,
      score: isNewGame ? 0 : firstPlayer.score,
    });
    setSecondPlayer({
      ...secondPlayer,
      currentChoice: defaultOption,
      score: isNewGame ? 0 : secondPlayer.score,
    });
  };

  return (
    <div>
      <h1>Jugador 1: {firstPlayer.score}</h1>
      <SelectOption
        player={firstPlayer}
        setPlayer={setFirstPlayer}
        visible={visible}
      />
      <h1>
        {singlePlayer === "true" ? "Sheldon" : "Jugador 2"}:{" "}
        {secondPlayer.score}
      </h1>
      <SelectOption
        player={secondPlayer}
        setPlayer={setSecondPlayer}
        visible={visible}
      />
      <Link to="/">Volver a inicio</Link>
      {winner && (
        <div>
          <p>
            {winner === "empate" ? "Hay empate" : `${winner.name} es mejor`}
          </p>
          <button onClick={() => playAgain()}>Siguiente</button>
          <button onClick={() => playAgain(true)}>Jugar de nuevo</button>
        </div>
      )}
    </div>
  );
};

export default Game;
