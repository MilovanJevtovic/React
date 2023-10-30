import React from "react";
import ReactDOM from "react-dom/client";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="left">
        <img src="./src/reactjs-icon.png" />
        <p>ReactFacts</p>
      </div>
      <p>React Course - Project 1</p>
    </header>
  );
}
