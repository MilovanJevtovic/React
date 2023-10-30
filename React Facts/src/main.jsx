import React from "react";
import ReactDOM from "react-dom/client";
import MainContent from "./main-content";
import Navbar from "./navbar";
import "./main.css";

function Page() {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
