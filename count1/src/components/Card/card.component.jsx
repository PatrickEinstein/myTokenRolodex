import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="myToken"
      src={`https://robohash.org/${props.myToken.id}?set=set2&size=180x180`}
    />
    <h2>{props.myToken.name}</h2>
    <p>{props.myToken.email}</p>
  </div>
);
