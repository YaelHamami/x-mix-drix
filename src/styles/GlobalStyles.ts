import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #0000FF; /* Same color as the Play Again button */
  text-align: center;
  margin-bottom: 1rem;
`;

export default GlobalStyles;
