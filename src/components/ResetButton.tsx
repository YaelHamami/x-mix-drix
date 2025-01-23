import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return <Button onClick={onReset}>Play Again</Button>;
};

export default ResetButton;
