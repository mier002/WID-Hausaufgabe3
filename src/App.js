import "./app.css";
import { useState } from "react";
import { Aufgabe } from "./static/ExText";
import image from "./static/Projekt_Würfel.PNG";

function App() {
  const [nameOne, setNameOne] = useState("");
  const [nametwo, setNameTwo] = useState("");
  const [scoreboardOne, setScoreboardOne] = useState("");
  const [scoreboardTwo, setScoreboardTwo] = useState("");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [round, setRound] = useState(0);

  function setFunction() {
    if (nameOne !== "" && nametwo !== "") {
      setScoreboardOne(nameOne);
      setScoreboardTwo(nametwo);
    }
  }

  function Roll() {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (round % 2 === 0) {
      setCountOne((count) => count + roll);
    } else {
      setCountTwo((count) => count + roll);
    }
    setRound((round) => round + 1);
  }

  function Reset() {
    setNameOne("");
    setNameTwo("");
    setScoreboardOne("");
    setScoreboardTwo("");
    setCountOne(0);
    setCountTwo(0);
    setRound(0);
  }

  return (
    <div className="App">
      <div className="App-header">Hausaufgabe 3 - React State</div>
      <div className="ExerciseContainer">
        <Aufgabe />
        <div className="WrapperImg">
          App in Teil 1 (oben) und Teil 2 (unten):
          <img src={image} alt="Projekt Würfel" />
        </div>
      </div>
      <h1>Würfelspiel</h1>

      <label htmlFor="nameOne"></label>
      <input
        className="Inputone"
        id="nameOne"
        placeholder="Name 1"
        value={nameOne}
        onChange={(event) => setNameOne(event.target.value)}
      />

      <label htmlFor="nameTwo"></label>
      <input
        className="InputTwo"
        id="nameTwo"
        placeholder="Name 2"
        value={nametwo}
        onChange={(event) => setNameTwo(event.target.value)}
      />

      <div id="Screen">
        <div>
          {scoreboardOne}
          {scoreboardOne !== "" && scoreboardTwo !== "" ? " gegen " : ""}
          {scoreboardTwo}
        </div>
      </div>

      <div>
        <p>
          {countOne} : {countTwo}
        </p>
      </div>

      <button
        className="Button1"
        disabled={
          nameOne === "" ||
          nametwo === "" ||
          (nameOne === scoreboardOne && nametwo === scoreboardTwo)
        }
        onClick={() => setFunction()}
      >
        Registrieren
      </button>

      <button
        className="Button2"
        disabled={
          nameOne === "" ||
          nametwo === "" ||
          scoreboardOne === "" ||
          scoreboardTwo === "" ||
          round >= 6
        }
        onClick={() => Roll()}
      >
        Würfeln
      </button>

      <button className="Button3" onClick={() => Reset()}>
        Neues Spiel
      </button>
    </div>
  );
}

export default App;
