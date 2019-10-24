import React from "react";
import "./style.css";

const Friend = props => (
  <div
    className="mycard"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img className="cardImg" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Friend;