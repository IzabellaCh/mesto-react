import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrenUser] = useState({});

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

  function handleUpdateUser(newInfo){
    api.changeUserInfo(newInfo)
      .then((data) => {
        setCurrenUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        alert(`Ошибка при обновлнии данных пользователя: ${err}`);
      });
  }

  useEffect(() => {
    api.getServerUserInfo()
    .then((data) => {
      setCurrenUser(data);
    })
    .catch((err) => {
      alert(`Ошибка при загрузке информации профиля: ${err}`);
    })
  }, [])

  return (
  <div className="page">
    <Header />
    <CurrentUserContext.Provider value={currentUser}>
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
    </CurrentUserContext.Provider>
    <Footer />
  </div>
  );
}

export default App;
