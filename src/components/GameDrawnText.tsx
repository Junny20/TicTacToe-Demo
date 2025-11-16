const GameDrawnText = ({onClick} : { onClick: () => void}) => {
  return (
    <div>
      <p>Draw! </p>
      <button onClick={onClick}>Play again?</button>
    </div>
  )
}

export default GameDrawnText