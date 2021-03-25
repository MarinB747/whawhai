import React from "react";
import "../Styles.css";
import { Link } from "react-router-dom";

function HomeAttacks() {
  return (
    <div className="home">
      <h1 className="tittle">WHAWHAI</h1>
      <div className="player__info">
        <Link to="/Warrior_Select" className="avatar"></Link>
        <input className="player__name" placeholder="$WARRIOR-NAME" />
      </div>
      <div className="attacks__column">
        <button className="attack" style={{ background: "#73FFA0" }}>
          <Link to="/" className="attack_link">
            Current Selected Attack
          </Link>
        </button>
        <button className="attack" style={{ background: "#FFE269" }}>
          <Link to="/" className="attack_link">
            Attack
          </Link>
        </button>
        <button className="attack" style={{ background: "#FFEC9B" }}>
          <Link to="/" className="attack_link">
            Hovereed Attack
          </Link>
        </button>
        <button className="start__game">FIGHT!!!</button>
      </div>
    </div>
  );
}

export default HomeAttacks;
