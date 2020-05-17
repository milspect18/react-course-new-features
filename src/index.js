import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NoteApp from "./components/NoteApp";
import AddIngredientForm from "./components/AddIngredientForm";





ReactDOM.render(
  <React.StrictMode>
    <AddIngredientForm />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
