import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body, #root {
    max-height: 100vh;
    background: #f4f6f9;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button
  {
    cursor: pointer;
  }
  
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1e1d1d;
    border-radius: 50px;
  }

  @media screen and (max-width: 648px) {
    ::-webkit-scrollbar {
      height: 1px;
    }
  }
`;
