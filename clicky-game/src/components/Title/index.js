import React from "react";
import "./style.css";

const Title = (props) => {
  return (
    <div className="titleContainer">
      <div className="titleDiv">
        <h1 className="title">Clicky Game!</h1>
        <h3 className="instructions">Click on a pictue to gain a point, but only click on each picture once!</h3>
      </div>
      <div className="scores">
        <h1 id="rw">{props.rightWrong}</h1>
        <h3 id="cur-sco">Current Score: {props.score}</h3>

        <h3 id="top-sco">Top Score: {props.topScore}</h3>
      </div>
    </div>
  );
}

export default Title;
