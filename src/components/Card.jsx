import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h3 className="card__title">{props.title}</h3>
        <img src={props.img} alt={props.author} className="card__img" />
        <h5 className="card__subtitle">{props.author}</h5>
      </div>
    </>
  );
};

export default Card;
