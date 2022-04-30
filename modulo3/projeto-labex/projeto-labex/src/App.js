import React from 'react';
import './App.css';
import { Router } from './routes/Router';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-image: url('https://i.pinimg.com/originals/51/6f/b5/516fb53642fbca78f3ee5c7f2a213e1c.jpg');
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
    }
`

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
};
