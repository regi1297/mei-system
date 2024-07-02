// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #444;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #fff;
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  nav ul {
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }

  nav ul li {
    background: none;
    padding: 0;
    box-shadow: none;
  }

  nav ul li a {
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  nav ul li a:hover {
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
