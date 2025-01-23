import styled from 'styled-components';
import X_IMAGE from '../assets/x-image.png';
import O_IMAGE from '../assets/o-image.png';

const CellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  box-sizing: border-box;
`;

const StyledImage = styled.img`
  max-width: 90%; /* Keep some padding */
  max-height: 90%;
  object-fit: contain; /* Ensures the image doesn't overflow */
`;

const imageMap: { [key: string]: string } = {
    X: X_IMAGE,
    O: O_IMAGE,
  };
  
  const Cell = ({ value, onClick }: { value: string | null; onClick: () => void }) => {
    return (
      <CellContainer onClick={onClick}>
        {value && <StyledImage src={imageMap[value]} alt={`Player ${value} move`} />}
      </CellContainer>
    );
  };

export default Cell;

