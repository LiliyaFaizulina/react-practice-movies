import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
   box-sizing: border-box;
   width: 100vw;
   overflow-x: hidden;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body{
    background: linear-gradient(180deg, rgba(2,1,10,1) 0%, rgba(41,41,42,1) 35%, #5b5c5c 100%);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
 }
  ul{
   padding: 0;
   margin: 0;
   list-style: none;
 }
  h1, h2, h3, p{
   margin: 0;
 }

 button{
    border: none;
    cursor: pointer;
 }
`;
