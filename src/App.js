import React from "react";

import "./styles.css";
import Routes from "./Routes";
import Header from "./Header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
