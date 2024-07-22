import React from "react";
import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
   <>
    <GlobalStyle/>
    <TodoTemplate>안녕하세요</TodoTemplate>
   </>
  );
}

export default App;
