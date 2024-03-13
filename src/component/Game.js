import React, { useEffect } from "react";
import Button from "./Button";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

function Game() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const { width, height } = useWindowSize();
  const [gameStart, setGamestart] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameBox, setGameBox] = React.useState(0);
  const [button, setButton] = React.useState([]);
  const [starTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);
  const startAgain = () => {
    setGamestart(false);
    setGameOver(false);
    setGameBox(0);
    setButton([]);
    setStartTime(null);
    setEndTime(null);
  };
  const indexArray = () => {
    const indexArray = [];
    for (let i = 0; i < gameBox * gameBox; i++) {
      indexArray.push({
        number: i,
        isClicked: false,
      });
    }
    return indexArray;
  };
  React.useEffect(() => {
    setButton(indexArray());
  }, [gameBox]);
  // set the start time when the game starts
  useEffect(() => {
    if (gameStart) {
      setStartTime(Date.now());
    }
  }, [gameStart]);
  // End of the game logic
  useEffect(() => {
    const allClicked = button.every((clicked) => clicked.isClicked);
    if (allClicked) {
      setEndTime(Date.now());
      setGameOver((prevState) => !prevState);
    }
  }, [button]);
  // Handle starting of th game
  const handleStartGame = () => {
    if (gameBox) {
      setGamestart((prevState) => !prevState);
    } else {
      alert("Select the Box size to play the game");
    }
  };
  // Setting the time
  function pad(number) {
    return (number < 10 ? "0" : " ") + number;
  }
  const timeTaken = endTime && starTime ? endTime - starTime : null;
  let seconds = Math.floor(timeTaken / 1000) % 60;
  let minutes = Math.floor(timeTaken / 1000 / 60) % 60;
  // generate the game box size
  const generateGameBox = () => {
    const sizeBox = [];
    for (let i = 3; i < 11; i++) {
      const styles = {
        backgroundColor: gameBox === i && "#fedb7f",
      };
      sizeBox.push(
        <div
          className="numbers"
          key={i}
          style={styles}
          onClick={() => getBoxValue(i)}
        >
          {i}x{i}
        </div>
      );
    }
    return sizeBox;
  };
  // setting the selected box value to a state
  const getBoxValue = (index) => {
    setGameBox(index);
  };

  const handleButtonClick = (index) => {
    // Check if the clicked button's number is the next in the sequence
    if (
      (index === button[index].number && // Check if the clicked button's number matches its index
        index === 0) || // If it's the first button, allow clicking
      button[index - 1].isClicked // Check if the previous button has been clicked
    ) {
      // Update the isClicked property of the clicked button to true
      const updatedButtons = button.map((btn, i) =>
        i === index ? { ...btn, isClicked: true } : btn
      );
      setButton(updatedButtons);
    }
  };

  const buttonArray = shuffleArray(
    button.map((item) => {
      return (
        <Button
          key={item.number}
          gameOver={gameOver}
          item={item}
          clicked={handleButtonClick}
        />
      );
    })
  );
  // Styling the game-container
  const styling = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    gridTemplate: `auto auto / repeat(${gameBox}, ${gameBox}fr)`,
    marginTop: "10px",
  };
  return (
    <div className="game-body">
      {gameOver && <Confetti className="confetti" />}
      <h2 className="app-head">click click</h2>
      {!gameStart && <p className="app-exp">Chose Box size here</p>}
      {!gameStart && <div className="number-body">{generateGameBox()}</div>}
      {!gameStart && (
        <button className="game-btn" onClick={handleStartGame}>
          Start
        </button>
      )}
      {gameStart && <div style={styling}>{buttonArray}</div>}
      {gameOver && <div className="gameover">Game Over</div>}
      {gameOver && (
        <div className="gameover">
          {` Time Used ${pad(minutes)} : ${pad(seconds)} Min(s)`}
        </div>
      )}
      {gameOver && (
        <button className="game-btn" onClick={startAgain}>
          Play Again
        </button>
      )}
    </div>
  );
}

export default Game;
