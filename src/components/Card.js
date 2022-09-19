import React from "react";

function Card(props) {
  return (
    <div className="element">
      <img className="element__image" alt="" src={props.card.link} />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="element__trash-button button"></button>
    </div>
  )
}

export default Card;