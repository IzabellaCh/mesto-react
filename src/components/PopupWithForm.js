import React, { useEffect } from 'react';

function PopupWithForm({name, title, isOpen, onClose, children, onSubmit}) {
  function handleEscClose(event) {
    if (event.key === 'Escape') {
      onClose();
    }
  }
  
    useEffect(() => {
    if (isOpen) {
        document.addEventListener('keydown', handleEscClose);
      }
    return () => {
        document.removeEventListener('keydown', handleEscClose);
    }
  }, [isOpen]);

    return (
    <div 
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <h2 className="popup__heading">{title}</h2>
        <form className={`popup__form popup__form_type_${name}`} onSubmit={onSubmit} noValidate>
          {children}
          <button type="submit" className="popup__save-button">Сохранить</button> 
        </form>
        <button className="popup__close-button button" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;