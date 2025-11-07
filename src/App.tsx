import "./App.css";
import Grid from "./components/Grid";
import PlayerText from "./components/PlayerText";
import { useState, useEffect } from "react";

function App() {

  const MAXTURN = 9;
  const RESETTURN = 0;

  const [turn, setTurn] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);
  var Icon = turn % 2 == 0 ? 'X' : 'O'; 

  const handleClick = () => {
    setTurn((prevValue) => prevValue + 1);
  }

  const handleGameEnd = (player: number) => {
    setGameEnded(true);
    setWinner(player);
  }

  useEffect(() => {
    if (turn != MAXTURN) {
      return;
    } else {
      setGameEnded(true);
      setTurn(RESETTURN);
    }
  }, [turn]);

  return (
    <>
      <section className="my-10">
        <p className="text-center">Tic Tac Toe</p>
      </section>
      <section className="flex justify-center">
        <Grid onClick={ handleClick } turnCount={ turn } onGameEnd={ handleGameEnd }></Grid>
      </section>
      <main className="text-center my-10">{gameEnded ? <p>Player { winner } won! Play again? </p> : <PlayerText turnCount={ turn } 
      icon = { Icon }></PlayerText>}</main>
    </>
  );
}

export default App;
