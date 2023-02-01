import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";


const Context = createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Context.Provider value={{ name: "Rohit", lastName: "Parmar" }}>
      <App />
    </Context.Provider>

);

export default Context;
