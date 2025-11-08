import GameWonText from "./GameWonText";
import GameDrawnText from "./GameDrawnText";

const GameEnd = ({
  winner,
  onClick,
}: {
  winner: number;
  onClick: () => void;
}) => {
  if (winner === -1) {
    return <GameDrawnText onClick={onClick}></GameDrawnText>;
  }
  return <GameWonText winner={winner} onClick={onClick}></GameWonText>;
};

export default GameEnd;
