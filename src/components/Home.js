import React, { useState } from "react";
import "../Styles.css";
import { Link, useHistory } from "react-router-dom";
import { fetchWarriorData } from "./API";
import ModalError from "../components/ModalError";

function Home() {
  const [playerName, setPlayerName] = useState();
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const warrior = "selected";
  const attack = "selected";
  const validateName = (event) => {
    if (/^[a-zA-Z ]{3,30}$/.test(event.target.value)) {
      setMessage("Great Name!");
    } else {
      setMessage("Please enter a valid Name!");
    }
  };
  const ValidateForm = () => {
    if (
      message === "Great Name!" &&
      warrior === "selected" &&
      attack === "selected"
    ) {
      history.push("/Fight_Waiting");
    } else {
      return setModalShow(true);
    }
  };

  return (
    <div className="home">
      <h1 className="tittle">WHAWHAI</h1>
      <div className="player__info">
        <Link to="/Warrior_Select" className="avatar"></Link>
        <input
          type="string"
          className="player__name"
          placeholder="$WARRIOR-NAME"
          onChange={validateName}
          value={playerName}
          onInput={(e) => setInput(e.target.value)}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <text
          className={`message ${isValid ? "success" : "error"}`}
          style={{ color: "#FFDF59", fontSize: "2rem" }}
        >
          {message}
        </text>
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
        <button className="start__game" onClick={ValidateForm}>
          FIGHT!!!
        </button>
      </div>
      <ModalError
        autoFocus={true}
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Home;
