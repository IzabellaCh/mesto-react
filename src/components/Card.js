import React from "react";

function Card({onCardClick, info}) {
  function handleClick() {
    onCardClick(info);
  }
  
  return (
    <div className="element">
      <img className="element__image" alt={info.name} src={info.link} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{info.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button"></button>
          <p className="element__like-counter">{info.likes.length}</p>
        </div>
      </div>
      <button className="element__trash-button button"></button>
    </div>
  )
}

export default Card;