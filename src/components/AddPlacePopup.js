import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function AddPlacePopup({ isOpen, onClose }) {
//   const currentUser = useContext(CurrentUserContext);

  return (
    <PopupWithForm 
      name="add-new-cards"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input type="text" id="placename-input" name="placename" className="popup__field popup__field_type_place-name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__field-error placename-input-error"></span>
      <input type="url" id="url-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на картинку" required />
      <span className="popup__field-error url-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;