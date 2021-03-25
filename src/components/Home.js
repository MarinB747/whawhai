import React from "react";
import "../Styles.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
function Home() {
  return (
    <div className="home">
      <h1 className="tittle">WHAWHAI</h1>
      <div className="player__info">
        <button className="avatar"></button>
        <input className="player__name" placeholder="$WARRIOR-NAME" />
      </div>
      <div className="attacks__column">
        <DropdownButton
          id="dropdown-basic-button"
          className="attack"
          title="Attack For Round #1"
        >
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
        <input className="attack" placeholder="Attack For Round #2"></input>
        <input className="attack" placeholder="Attack For Round #3"></input>
      </div>
    </div>
  );
}

export default Home;
