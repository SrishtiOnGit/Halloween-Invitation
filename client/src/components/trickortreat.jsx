import { useState } from "react";
import "./trickortreat.css";
import Pumpkin from "../assets/pumpkin.png";
import Ghost from "../assets/ghost.png";

const TrickTreat = () => {
  const [candies, setCandies] = useState(0);
  const [tricks, setTricks] = useState(0);
  const [pumpkins, setPumpkins] = useState(0);
  const [message, setMessage] = useState("Knock knock...");

  const handleClick = () => {
    const random = Math.floor(Math.random() * 5) + 1;

    if (random <= 3) {
      setCandies(candies + 1);
      setScore(score + 1);
      setMessage(`You received ${candies + 1} candies`);
    } else if (random === 4) {
      setTricks(tricks + 1);
      setScore(score - 1);
      setMessage(`You received ${tricks + 1} tricks `);
    } else if (random === 5) {
      setPumpkins(pumpkins + 1);
      setScore(score + 3);
      setMessage(`You received ${pumpkins + 1} pumpkins `);
    }
  };
  const [score, setScore] = useState(0);
  const Reset = () => {
    setCandies(0);
    setTricks(0);
    setPumpkins(0);
    setScore(0);
    setMessage("Knock knock...");
  };
  return (
    <div className="tricktreat">
      <img src={Pumpkin} alt="Pumpkin" className="pumpkin" />
      <img src={Ghost} alt="Pumpkin" className="ghost" />
      <h1>TRICK OR TREAT</h1>
      <button onClick={Reset} className="btn-1">
        Reset
      </button>
      <p className="score">Score : {score}</p>
      <div className="door">🚪</div>
      <p className="message">{message}</p>
      <button onClick={handleClick} className="btn-2">
        Open Door
      </button>
      <div className="score">
        <p> Candies : {candies}</p>
        <p> Tricks : {tricks}</p>
        <p> Pumpkin : {pumpkins}</p>
      </div>
    </div>
  );
};

export default TrickTreat;
