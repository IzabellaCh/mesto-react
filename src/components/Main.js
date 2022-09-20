import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import {api} from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
        api.getServerUserInfo(),
        api.getInitialCards()
      ])
      .then(([dataUserInfo, dataInitialCards]) => {
        setUserName(dataUserInfo.name);
        setUserDescription(dataUserInfo.about);
        setUserAvatar(dataUserInfo.avatar);

        setCards(dataInitialCards);
      })
      .catch((errUserInfo, errInitialCards) => {
        alert(`Ошибка при загрузке информации профиля: ${errUserInfo}`);
        alert(`Ошибка при загрузке массива карточек: ${errInitialCards}`);
      })
  }, [])

  return (
  <main className="main padding-side">
    <section className="profile" aria-label="Профиль">
      <div className="profile__data">
        <img className="profile__photo" alt="Аватар." src={userAvatar} />
        <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
      </div>
      <button className="profile__add-button button" onClick={props.onAddPlace}></button>
    </section>
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      isOpen={props.isEditAvatarOpen}
      onClose={props.closeAllPopups}
      handleClose={props.onEditAvatar}
      children={
        <>
          <input type="url" id="link-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на аватар" required />
          <span className="popup__field-error link-input-error"></span>
        </>
      }
      />
    <PopupWithForm 
      name="personal-information" 
      title="Редактировать профиль" 
      isOpen={props.isEditProfilePopupOpen} 
      onClose={props.closeAllPopups}
      handleClose={props.onEditProfile}
      children={
        <>
          <input type="text" id="name-input" name="name" className="popup__field popup__field_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__field-error name-input-error"></span>
          <input type="text" id="description-input" name="description" className="popup__field popup__field_type_description" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="popup__field-error description-input-error"></span>
        </>
      }
      />
    <PopupWithForm 
      name="add-new-cards" 
      title="Новое место" 
      isOpen={props.isAddPlacePopupOpen}
      onClose={props.closeAllPopups}
      handleClose={props.onAddPlace}
      children={
        <>
          <input type="text" id="placename-input" name="placename" className="popup__field popup__field_type_place-name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__field-error placename-input-error"></span>
          <input type="url" id="url-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на картинку" required />
          <span className="popup__field-error url-input-error"></span>
        </>
      }
       />
    <section className="elements" aria-label="Фото">
      <div className="elements__list">
        {cards.map((item) => (
          <Card info={item} key={item._id} onCardClick={props.onCardClick} />
        ))
        }
      </div>
    </section>
    <ImagePopup 
      card={props.card}
      onClose={props.closeAllPopups}
      handleClose={props.onCardClick}
      />
    <PopupWithForm 
      name="delete-card" 
      title="Вы уверены?" />
  </main>
  )
}

export default Main;