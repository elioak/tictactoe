import Square from "./Element";

interface BoardProps {
  currentBoard: Array<string | null>;
  onBoardChange: (i: number) => void;
}

export default function Board({ currentBoard, onBoardChange }: BoardProps) {
  return (
    <div>
      <h3>Board </h3>
      <div>
        <Square
          value={currentBoard[0]}
          onSquareChange={() => onBoardChange(0)}
        />
        <Square
          value={currentBoard[1]}
          onSquareChange={() => onBoardChange(1)}
        />
        <Square
          value={currentBoard[2]}
          onSquareChange={() => onBoardChange(2)}
        />
      </div>
      <div>
        <Square
          value={currentBoard[3]}
          onSquareChange={() => onBoardChange(3)}
        />
        <Square
          value={currentBoard[4]}
          onSquareChange={() => onBoardChange(4)}
        />
        <Square
          value={currentBoard[5]}
          onSquareChange={() => onBoardChange(5)}
        />
      </div>
      <div>
        <Square
          value={currentBoard[6]}
          onSquareChange={() => onBoardChange(6)}
        />
        <Square
          value={currentBoard[7]}
          onSquareChange={() => onBoardChange(7)}
        />
        <Square
          value={currentBoard[8]}
          onSquareChange={() => onBoardChange(8)}
        />
      </div>
    </div>
  );
}
