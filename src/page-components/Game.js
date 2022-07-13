import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import SelectOption from "../components/SelectOption";
import { calculateWinner } from "../utils/calculateWinner";
import { randomOption } from "../utils/randomOption";
import queryString from "query-string";
import { booleanConversor } from "../utils/booleanConversor";

const Game = () => {
  const { singlePlayer } = queryString.parse(useLocation().search);
  const isSinglePlayer = booleanConversor(singlePlayer);

  const defaultOption = isSinglePlayer ? randomOption() : null;

  const [firstPlayer, setFirstPlayer] = useState({
    name: "Jugador 1",
    currentChoice: null,
    score: 0,
    isCurrentWinner: false,
  });
  const [secondPlayer, setSecondPlayer] = useState({
    name: isSinglePlayer ? "Sheldon" : "Jugador 2",
    currentChoice: defaultOption,
    score: 0,
    isCurrentWinner: false,
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
          setFirstPlayer({
            ...firstPlayer,
            score: firstPlayer.score + 1,
            isCurrentWinner: true,
          });
        }
        if (winner.name === secondPlayer.currentChoice.name) {
          setSecondPlayer({
            ...secondPlayer,
            score: secondPlayer.score + 1,
            isCurrentWinner: true,
          });
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
      isCurrentWinner: false,
    });
    setSecondPlayer({
      ...secondPlayer,
      currentChoice: defaultOption,
      score: isNewGame ? 0 : secondPlayer.score,
      isCurrentWinner: false,
    });
  };

  return (
    <div className="game-container">
      <div className="game-container__main">
        <SelectOption
          player={firstPlayer}
          setPlayer={setFirstPlayer}
          visible={visible}
        />
        <SelectOption
          player={secondPlayer}
          setPlayer={setSecondPlayer}
          visible={visible}
        />
      </div>
      {winner && (
        <div className="game-container__winner">
          <p>
            {winner === "empate" ? "Hay empate" : `${winner.name} es mejor`}
          </p>
          <div className="game-container__winner__buttons">
            <button onClick={() => playAgain(true)}>Jugar de nuevo</button>
            <button onClick={() => playAgain()}>Siguiente</button>
          </div>
        </div>
      )}

      <Link to="/">Volver a inicio</Link>
    </div>
  );
};

export default Game;
