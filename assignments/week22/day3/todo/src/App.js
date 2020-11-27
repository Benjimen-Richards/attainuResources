import React from "react";
import "./styles.css";
import Addtodo from "./Components/Addtodo";
import List from "./Components/List";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Addtodo />
      <div className="List">
        <List />
      </div>
    </div>
  );
};
export default App;
