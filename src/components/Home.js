import React from "react";
import "../Styles.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="tittle">WHAWHAI</h1>
      <div className="player__info">
        <Link to="/Warrior_Select" className="avatar"></Link>
        <input className="player__name" placeholder="$WARRIOR-NAME" />
      </div>
      <div className="attacks__column">
        <button className="attack" style={{ background: "#FFF5CD" }}>
          <Link to="/Home_Attacks" className="attack_link">
            Attack For Round #1
          </Link>
        </button>
        <button className="attack" style={{ background: "#FFEC9B" }}>
          <Link to="/Home_Attacks" className="attack_link">
            Attack For Round #2
          </Link>
        </button>
        <button className="attack" style={{ background: "#FFE269" }}>
          <Link to="/Home_Attacks" className="attack_link">
            Attack For Round #3
          </Link>
        </button>
        <button className="start__game">FIGHT!!!</button>
      </div>
    </div>
  );
}

export default Home;
