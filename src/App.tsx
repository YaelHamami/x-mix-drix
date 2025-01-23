import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Title } from './styles/GlobalStyles';
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import WinnerMessage from './components/WinnerMessage';

const App: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return; // Prevent overwriting or continuing after game ends
  
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  
    const checkWinner = calculateWinner(newBoard);
    if (checkWinner) {
      setWinner(checkWinner);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw'); // Mark the game as a draw if no empty cells are left
    }
  };
  

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <>
      <GlobalStyles />
      <Title>X Mix Drix</Title>
      <Board board={board} onClick={handleClick} />
      {winner && (
        <WinnerMessage>
          {winner === 'Draw'
            ? 'It\'s a Draw!'
            : `Player ${winner} Wins!`}
        </WinnerMessage>
      )}
      <ResetButton onReset={resetGame} />
    </>
  );
};

export default App;