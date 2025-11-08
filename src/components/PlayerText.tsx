const PlayerText = ({
  turnCount,
  icon,
}: {
  turnCount: number;
  icon: string;
}) => {
  const INDEX = 1;

  var Player = (turnCount % 2) + 1;

  return (
    <div>
      <p>Turn: {turnCount + INDEX}</p>
      <p>
        {turnCount % 2 == 0
          ? `Player ${Player}'s turn!`
          : `Player ${Player}'s turn!`}
      </p>
      <p>{`Player ${Player}'s icon: ${icon}`}</p>
    </div>
  );
};

export default PlayerText;
