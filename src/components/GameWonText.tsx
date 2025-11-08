const GameEndText = ({ winner, onClick } : { winner: number, onClick: () => void }) => {
  return (
    <div>
      <p>Player {winner} won! </p>
      <button onClick={onClick}>Play again?</button>
    </div>
  );
};

export default GameEndText;
