import { useState, useEffect } from "react";
import Square from "./Square";

const Grid = ({
  onClick,
  turnCount,
  grid,
  onGameEnd,
  gameId,
}: {
  onClick: () => void;
  turnCount: number;
  grid: number[][];
  onGameEnd: (player: number) => void;
  gameId: number;
}) => {
  const NEGATIVE_ONE = -1;
  const PLAYERONE = 1;
  const PLAYERTWO = 2;
  const DIMENSION = 3;

  const [squareGrid, setSquareGrid] = useState(grid);

  useEffect(() => {
    setSquareGrid([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
  }, [gameId]);

  const handleClick = (i: number) => {
    var turn = turnCount % 2 == 0 ? 0 : 1;
    var newGrid = squareGrid.map((e) => e);

    newGrid[Math.floor(i / 3)][i % 3] = turn;
    setSquareGrid(newGrid);
    if (onClick) onClick();
  };

  const detectGameEnd = (grid: number[][]): number => {
    // detecting horizontal game end
    for (var i = 0; i < grid.length; ++i) {
      if (grid[i].every((e) => e === 0)) return PLAYERONE;
      if (grid[i].every((e) => e === 1)) return PLAYERTWO;
    }

    // detecting vertical game end
    var col0 = [];
    var col1 = [];
    var col2 = [];
    for (var i = 0; i < grid.length; ++i) {
      col0.push(grid[i][0]);
      col1.push(grid[i][1]);
      col2.push(grid[i][2]);
    }

    if (
      col0.every((e) => e === 0) ||
      col1.every((e) => e === 0) ||
      col2.every((e) => e === 0)
    ) {
      return PLAYERONE;
    }
    if (
      col0.every((e) => e === 1) ||
      col1.every((e) => e === 1) ||
      col2.every((e) => e === 1)
    ) {
      return PLAYERTWO;
    }

    // detecting diagonal game end
    var topToBottom = [];
    var bottomToTop = [];

    for (var i = 0; i < DIMENSION; ++i) {
      topToBottom.push(grid[i][i]);
      bottomToTop.push(grid[i][DIMENSION - i - 1]);
    }

    if (topToBottom.every((e) => e === 0) || bottomToTop.every((e) => e === 0))
      return PLAYERONE;
    if (topToBottom.every((e) => e === 1) || bottomToTop.every((e) => e === 1))
      return PLAYERTWO;

    // game has not ended
    return NEGATIVE_ONE;
  };

  useEffect(() => {
    var result = detectGameEnd(squareGrid);
    if (result === 1 || result === 2) {
      console.log("Player " + result + " won!");
      if (onGameEnd) onGameEnd(result);
    }
  }, [squareGrid]);

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-x-1 gap-y-0 w-max">
      {Array.from({ length: 9 }).map((_, i) => (
        <Square
          key={i}
          onClick={handleClick}
          turnCount={turnCount}
          index={i}
          gameId={gameId}
        ></Square>
      ))}
    </div>
  );
};

export default Grid;
