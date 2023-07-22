import React, { useState } from "react";
import "./tic.css";
const Board = () => {
  const [array, setArray] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [won, setWon] = useState(null);
  console.log(array);

  const getWinner = () => {
    let logic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of logic) {
      let [a, b, c] = i;
      if (array[a] !== null && array[a] === array[b] && array[a] === array[c]) {
        return array[a];
      }
    }
    return false;
  };
  const winner = getWinner();

  const handleTurn = (index) => {
    let nullValues = array.filter((data) => data === null);
    if (array[index] !== null) {
      return;
    }
    if (!winner && nullValues.length !== 0) {
      const copyArray = [...array];
      isXTurn ? (copyArray[index] = "X") : (copyArray[index] = "0");
      setArray(copyArray);
      setIsXTurn(!isXTurn);
    } else winner = "Draw";
  };
  return (
    <>
      <div className="board-container"></div>
      <div className="result">
        {winner && <h1>Winner : {winner}</h1>}

        <h2>{isXTurn ? "X" : "0"} Turn</h2>
        <button onClick={() => setArray(Array(9).fill(null))}>Restart</button>
      </div>
    </>
  );
};

export default Board;
