import React, { useState, createContext, useContext } from "react";

const CounterContext = createContext();

export const NameContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const UseCounterContext = () => useContext(CounterContext);
