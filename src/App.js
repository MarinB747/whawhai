import React from "react";
import "./Styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import WarriorSelect from "./components/WarriorSelect";
import HomeAttacks from "./components/HomeAttacks";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Warrior_Select" exact component={WarriorSelect} />
          <Route path="/Home_Attacks" exact component={HomeAttacks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
