import React, { useState } from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";
import reverseCard from "./img/uno-reverse-card-meme-512x512.png";
import "./css/App.css";
function App() {
  const [direction, setDirection] = useState(true);
  const reverseReverse = () => {
    setDirection(!direction);
    console.log("Reversed", direction);
  };
  return (
    <React.Fragment>
      <ForwardCounter direction={direction} />

      <div className={"cardContainer"}>
        <img
          className={"reverseCard"}
          onClick={reverseReverse}
          src={reverseCard}
          alt={"An Uno Reverse Card"}
        ></img>
      </div>

      <BackwardCounter direction={direction} />
    </React.Fragment>
  );
}

export default App;
