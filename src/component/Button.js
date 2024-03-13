function Button(props) {
  const styling = {
    backgroundColor: props.item.isClicked && "#f25678",
  };
  return (
    <button
      className="game-button"
      style={styling}
      disabled={props.gameOver}
      onClick={() => props.clicked(props.item.number)}
    >
      {props.item.number + 1}
    </button>
  );
}

export default Button;
