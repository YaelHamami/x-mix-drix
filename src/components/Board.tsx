import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
`;

interface BoardProps {
  board: Array<string | null>;
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <BoardContainer>
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </BoardContainer>
  );
};

export default Board;
