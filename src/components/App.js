import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(!isEditAvatarOpen);
  };
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };
  
  function closeAllPopups() {
    if (isEditAvatarOpen) {
      handleEditAvatarClick();
    };
    if (isEditProfilePopupOpen) {
      handleEditProfileClick();
    };
    if (isAddPlacePopupOpen) {
      handleAddPlaceClick();
    }
  }

  return (
  <div className="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      isEditAvatarOpen={isEditAvatarOpen}
      isEditProfilePopupOpen={isEditProfilePopupOpen}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      closeAllPopups={closeAllPopups}
    />
    <Footer />
  </div>
  );
}

export default App;
