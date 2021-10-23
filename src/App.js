import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Picture from "./components/main-section/Picture";
// import { MyContext } from "./components/main-section/Searched";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Picture />
    </div>
  );
}

export default App;
