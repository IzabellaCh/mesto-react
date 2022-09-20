import React from "react";

function ImagePopup(props) {
  function closePopup(event) {
    props.onClose(event, props.card, props.handleClose)
  };
  
  React.useEffect(() => {
    if (props.card) {
        document.addEventListener('keydown', closePopup);
      }
    
    return () => {
        document.removeEventListener('keydown', closePopup);
    }
  }, [props.card]);

  return (
    <div className={`popup popup_type_card ${props.card ? "popup_opened" : ""}`} onClick={closePopup}>
      <div className="popup__container popup__container_type_card">
        <img className="popup__image" alt={props.card.name} src={props.card.link} />
        <h2 className="popup__title">{props.card.name}</h2>
        <button className="popup__close-button button"></button>
      </div>
    </div>
  )
}

export default ImagePopup;