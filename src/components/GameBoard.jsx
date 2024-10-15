import { useState } from "react";
import GameBox from "./GameBox";
import PlayerScore from "./PlayerScore";

const gameInitialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameState, setGameState] = useState(gameInitialState);
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [playerOne, setPlayerOne] = useState({
    playerName: "Player 1",
    playerSymbol: "X",
    score: 0,
  });
  const [playerTwo, setPlayerTwo] = useState({
    playerName: "Player 2",
    playerSymbol: "O",
    score: 0,
  });

  const handleClickGameBox = (rowIndex, colIndex) => {
    setGameState((currState) => {
      const newState = [...currState];
      newState[rowIndex][colIndex] = activePlayer;

      const winner = checkGameWinner(newState);
      if (winner) {
        setGameOver(true);
      }

      return newState;
    });

    setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
  };

  const handleResetClick = () => {
    setGameState((currState) => {
      const newGameState = [...currState.map((row) => row.map((col) => null))];
      return newGameState;
    });

    setGameOver(false);
    setActivePlayer("X");
  };

  const handleOnChangeName = (playerSymbol, newName) => {
    if (playerSymbol === "X") {
      setPlayerOne(currState => {
        const newState = {...currState, playerName: newName}
        return newState;
      });
    } else {
      setPlayerTwo(currState => {
        const newState = {...currState, playerName: newName}
        return newState;
      });
    }
  }

  function checkGameWinner(gameState) {
    let winner;

    console.log(gameState);

    // horizontal check
    for (const sub of gameState) {
      if (sub[0] && sub[1] && sub[2]) {
        if (sub[0] === sub[1] && sub[1] === sub[2]) {
          console.log("execute");
          winner = sub[0];
          return winner;
        }
      }
    }

    // Vertical check
    for (let i = 0; i < 3; i++) {
      if (gameState[0][i] && gameState[1][i] && gameState[2][i]) {
        if (
          gameState[0][i] === gameState[1][i] &&
          gameState[1][i] === gameState[2][i]
        ) {
          winner = gameState[0][i];
          return winner;
        }
      }
    }

    // Cross check
    if (
      (gameState[0][0] === gameState[1][1] &&
        gameState[1][1] === gameState[2][2]) ||
      (gameState[0][2] === gameState[1][1] &&
        gameState[1][1] === gameState[2][0])
    ) {
      winner = gameState[1][1];
      return winner;
    }

    // Draw check
  }

  return (
    <div className="w-[500px] bg-boardBg mx-auto rounded-xl mb-10">
      <section id="game-score" className="flex gap-6 justify-center py-10">
        <PlayerScore
          {...playerOne}
          bgColor={"bg-cyan-400"}
          activePlayer={activePlayer}
          onChangeName={handleOnChangeName}
        />
        <PlayerScore playerName={"Draw"} bgColor={"bg-slate-300"} />
        <PlayerScore
          {...playerTwo}
          bgColor={"bg-yellow-400"}
          activePlayer={activePlayer}
          onChangeName={handleOnChangeName}
        />
      </section>
      <section id="game-box" className="p-8 flex flex-col gap-4">
        {gameState.map((row, rowIndex) => (
          <ul className="flex gap-6" key={rowIndex}>
            {row.map((symbol, colIndex) => (
              <GameBox
                playersymbol={symbol}
                onClick={() => handleClickGameBox(rowIndex, colIndex)}
                key={colIndex}
                disabled={gameOver || symbol !== null}
              />
            ))}
          </ul>
        ))}
      </section>
      <div id="btn-container" className="flex justify-center py-6">
        <button
          className="bg-orange-500 px-8 py-2 rounded-md mx-auto font-medium"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
      <section id="game-log"></section>
    </div>
  );
};

export default GameBoard;
