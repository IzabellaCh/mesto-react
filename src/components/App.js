import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  };
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(cardInfo) {
    setSelectedCard(cardInfo);
  }

  function closeAllPopups() {
    setIsEditAvatarOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
  <div className="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
    />
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      isOpen={isEditAvatarOpen}
      onClose={closeAllPopups}
    >
      <input type="url" id="link-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на аватар" required />
      <span className="popup__field-error link-input-error"></span>
    </PopupWithForm>
    <PopupWithForm 
      name="personal-information" 
      title="Редактировать профиль" 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}
    >
      <input type="text" id="name-input" name="name" className="popup__field popup__field_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="popup__field-error name-input-error"></span>
      <input type="text" id="description-input" name="description" className="popup__field popup__field_type_description" placeholder="О себе" minLength="2" maxLength="200" required />
      <span className="popup__field-error description-input-error"></span>
    </PopupWithForm>
    <PopupWithForm 
      name="add-new-cards"
      title="Новое место"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <input type="text" id="placename-input" name="placename" className="popup__field popup__field_type_place-name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__field-error placename-input-error"></span>
      <input type="url" id="url-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на картинку" required />
      <span className="popup__field-error url-input-error"></span>
    </PopupWithForm>
    <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}
    />
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
    />
    <Footer />
  </div>
  );
}

export default App;
