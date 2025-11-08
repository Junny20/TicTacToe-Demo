import { useEffect, useState } from "react";

const Square = ({
  onClick,
  turnCount,
  index,
  gameId,
}: {
  onClick: (i: number) => void;
  turnCount: number;
  index: number;
  gameId: number;
}) => {
  const [value, setValue] = useState("");
  const [hasValue, setHasValue] = useState(false);

  const handleClick = () => {
    if (hasValue) return;

    turnCount % 2 === 0 ? setValue("X") : setValue("O");
    setHasValue((prevValue) => !prevValue);
    if (onClick) onClick(index);
  };

  useEffect(() => {
    setValue(""), setHasValue(false);
  }, [gameId]);

  return (
    <div>
      <button
        className="h-10 w-10 p-0 m-0 bg-gray-300 rounded-md"
        onClick={handleClick}
      >
        <p>{value}</p>
      </button>
    </div>
  );
};

export default Square;
