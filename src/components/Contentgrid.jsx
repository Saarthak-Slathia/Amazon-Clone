import React from "react";
import "./Contentgrid.css";

const Contentgrid = (props) => {
  return (
    <>
      <div className="content__grid">
        <h1 className="content__header">{props.topic}</h1>
        <img src={props.img} alt={props.author} className="grid__image" />
      </div>
    </>
  );
};

export default Contentgrid;
