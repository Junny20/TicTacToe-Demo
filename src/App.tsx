import "./App.css";
import Grid from "./components/Grid";
import PlayerText from "./components/PlayerText";
import GameEnd from "./components/GameEnd";
import { useState, useEffect } from "react";

function App() {
  const MAXTURN = 9;
  const RESETTURN = 0;
  const EMPTYGRID = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];

  const [turn, setTurn] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState(-1);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [gameId, setGameId] = useState(1); // the number of games played

  var Icon = turn % 2 == 0 ? "X" : "O";

  const handleClick = () => {
    setTurn((prevValue) => prevValue + 1);
  };

  const handleGameEnd = (player: number) => {
    setGameEnded(true);
    setWinner(player);
    if (player === -1) {
      return;
    } else if (player === 1) {
      setPlayerOneScore((prevValue) => prevValue + 1);
    } else {
      setPlayerTwoScore((prevValue) => prevValue + 1);
    }
  };

  const handleResetGame = () => {
    setGameId((prevValue) => prevValue + 1);
    setTurn(0);
    setWinner(-1);
    setGameEnded(false);
  };

  useEffect(() => {
    if (turn < MAXTURN) {
      return;
    } else {
      setGameEnded(true);
      setTurn(RESETTURN);
    }
  }, [turn]);

  return (
    <div className="flex h-screen flex-col justify-center ">
      <section className="my-10">
        <p className="text-center">Tic Tac Toe</p>
      </section>
      <section className="flex justify-center">
        <Grid
          onClick={handleClick}
          turnCount={turn}
          grid={EMPTYGRID}
          onGameEnd={handleGameEnd}
          gameId={gameId}
        ></Grid>
      </section>
      <main className="text-center my-10">
        {gameEnded ? (
          <GameEnd
            winner={winner > 0 ? winner : -1}
            onClick={handleResetGame}
          ></GameEnd>
        ) : (
          <PlayerText turnCount={turn} icon={Icon}></PlayerText>
        )}
      </main>
      <section className="text-center">
        <div>
          <p>Game number {gameId}</p>
          <p>
            {playerOneScore} : {playerTwoScore}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
