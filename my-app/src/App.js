import React from "react";
import "./App.css";
import FactsStarWars from "./components/starWarsFacts";
import UsersPhoto from "./components/usersPhoto";

function App() {
  return (
    <div>
      <div>
        <FactsStarWars />
      </div>
      <div>
        <UsersPhoto />
      </div>
    </div>
  );
}

export default App;
