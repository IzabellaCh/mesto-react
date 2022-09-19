import React from 'react';

function PopupWithForm(props) {
  function closePopup(event) {
    if ((event.target.classList.contains('popup__close-button')) || (event.target === event.currentTarget)) {
      props.onClose();
    }
  };
  
  React.useEffect(() => {
    function handleEscClose(event) {
      if (event.key === 'Escape') {
        props.onClose();
      }
    }
    
    if (props.isOpen) {
        document.addEventListener('keydown', handleEscClose);
      }
    
    return () => {
        document.removeEventListener('keydown', handleEscClose);
    }
  }, [props.isOpen]);

    return (
    <div 
      className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`} onClick={closePopup}>
      <div className={`popup__container popup__container_type${props.name}`}>
        <h2 className="popup__heading">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name}`} noValidate>
          {/* {props.children} */}
          <button type="submit" className="popup__save-button">Сохранить</button> 
        </form>
        <button className="popup__close-button button"></button>
      </div>
    </div>
  )
}

export default PopupWithForm;