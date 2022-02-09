import { createGlobalStyle } from "styled-components";
import Constants from "./Constants";

export const GlobalStyles = createGlobalStyle`
  ${Constants};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    padding: 0;
    font-family: var(--font-main);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    background-color: var(--white);
    color: var(--black);
    max-width: var(--max-width);
    text-size-adjust: none;
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
  }

  button, a {
    cursor: pointer;
  }
`;
