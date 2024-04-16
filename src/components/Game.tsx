import { useState } from "react";
import Board from "./Board";
import History from "./History";
import handleWinner from "../utils/handleWinner";
import styles from "./Game.module.css"; // Import the CSS module

export default function Game() {
  const [turn, setTurn] = useState<string>("X");
  const [history, setHistory] = useState([Array(9).fill(null)]);

  let currentBoard = history[history.length - 1];
  const winner = handleWinner({ array: currentBoard });

  function handleBoardChange(i: number) {
    let nextBoard = currentBoard.slice();

    if (winner || nextBoard[i]) {
      return;
    }
    nextBoard[i] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setHistory([...history, nextBoard]);
  }

  function handleHistory(step: number) {
    setHistory(history.slice(0, step + 1));
    setTurn(step % 2 === 0 ? "X" : "O");
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Turn: " + turn;
  }
  return (
    <div>
      <h1> TicTacToe </h1>
      <h2> {status}</h2>
      <div className={styles.gameContainer}>
        <Board currentBoard={currentBoard} onBoardChange={handleBoardChange} />
        <History history={history} onHistoryClick={handleHistory} />
      </div>
    </div>
  );
}
