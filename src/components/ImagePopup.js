import React, { useEffect } from "react";

function ImagePopup({card, onClose}) {
  function handleEscClose(event) {
    if (event.key === 'Escape') {
      onClose();
    }
  }
  
  useEffect(() => {
    if (card) {
        document.addEventListener('keydown', handleEscClose);
      }
    return () => {
        document.removeEventListener('keydown', handleEscClose);
    }
  }, [card]);

  return (
    <div className={`popup popup_type_card ${card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_card">
        <img className="popup__image" alt={card?.name} src={card?.link} />
        <h2 className="popup__title">{card?.name}</h2>
        <button className="popup__close-button button" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;