import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.info);
  }
  
  return (
    <div className="element">
      <img className="element__image" alt="" src={props.info.link} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{props.info.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button"></button>
          <p className="element__like-counter">{props.info.likes.length}</p>
        </div>
      </div>
      <button className="element__trash-button button"></button>
    </div>
  )
}

export default Card;