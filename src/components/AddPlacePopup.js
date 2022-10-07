import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');
  
  function handleAddPlaceName(e) {
    setPlaceName(e.target.value);
  }

  function handleAddPlaceLink(e) {
    setPlaceLink(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: placeName,
      link: placeLink
    })

    setPlaceName('');
    setPlaceLink('');
  }

  return (
    <PopupWithForm 
      name="add-new-cards"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="text" onChange={handleAddPlaceName} value={placeName} id="placename-input" name="placename" className="popup__field popup__field_type_place-name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__field-error placename-input-error"></span>
      <input type="url" onChange={handleAddPlaceLink} value={placeLink} id="url-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на картинку" required />
      <span className="popup__field-error url-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;