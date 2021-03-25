import React from "react";
import "./Styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import WarriorSelect from "./components/WarriorSelect";
import HomeAttacks from "./components/HomeAttacks";
import FightWaiting from "./components/FIghtWaiting";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Warrior_Select" exact component={WarriorSelect} />
          <Route path="/Home_Attacks" exact component={HomeAttacks} />
          <Route path="/Fight_Waiting" exact component={FightWaiting} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
