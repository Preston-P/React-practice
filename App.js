import React, { useState } from "react";
import styled from "styled-components";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <MovieProvider>
      <div className="app">
        <Nav />
        <MovieList></MovieList>
      </div>
    </MovieProvider>
  );
}

export default App;
