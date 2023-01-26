import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.colors["base-background"]};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    color: ${({theme})=> theme.colors["base-text"]};
    line-height: 160%;
  }
  
  body, input, textarea, button {
    /* font: 400 1rem Roboto, sans-serif; */
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: ${({theme})=> theme.colors["base-white"]};
  }
`;