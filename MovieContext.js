import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry potter",
      price: "$10",
      id: 23124
    },

    {
      name: "Eragon",
      price: "$10",
      id: 2556123
    },

    {
      name: "The man from nowhere",
      price: "$10",
      id: 777
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
