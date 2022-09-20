import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(!isEditAvatarOpen);
  };
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function handleCardClick(cardInfo) {
    if (!selectedCard) {
      setSelectedCard(cardInfo);
    } else {
      setSelectedCard(false);
    }
  }
  
  function handleCloseAllPopups(popupSelector, handleClose) {
    if (popupSelector) {
      handleClose();
    }
  }

  function closeAllPopups(event, popupSelector, handleClose) {
    if ((event.target.classList.contains('popup__close-button')) || (event.target === event.currentTarget) || (event.key === 'Escape')) {
      handleCloseAllPopups(popupSelector, handleClose);
    }
  }

  return (
  <div className="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCard={setSelectedCard}
      isEditAvatarOpen={isEditAvatarOpen}
      isEditProfilePopupOpen={isEditProfilePopupOpen}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      closeAllPopups={closeAllPopups}
      card={selectedCard}
      onCardClick={handleCardClick}
    />
    <Footer />
  </div>
  );
}

export default App;
