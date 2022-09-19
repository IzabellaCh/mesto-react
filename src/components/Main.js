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
    api.getServerUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        alert(`Ошибка при загрузке информации профиля: ${err}`);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        alert(`Ошибка при загрузке массива карточек: ${err}`);
      })
  }, [])

//   function CreateCards() {
//     cards.forEach((item) => {
//       return (
//         <div className="element">
//           <img className="element__image" alt="" src={item.link} />
//           <div className="element__description">
//             <h2 className="element__title">{item.name}</h2>
//             <div className="element__like-container">
//               <button className="element__like-button"></button>
//               <p className="element__like-counter">{item.likes.length}</p>
//             </div>
//           </div>
//           <button className="element__trash-button button"></button>
//         </div>
//       );
//     });
//   }

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
      />
    <PopupWithForm 
      name="personal-information" 
      title="Редактировать профиль" 
      isOpen={props.isEditProfilePopupOpen} 
      onClose={props.closeAllPopups}
      />
    <PopupWithForm 
      name="add-new-cards" 
      title="Новое место" 
      isOpen={props.isAddPlacePopupOpen}
      onClose={props.closeAllPopups}
       />
    <section className="elements" aria-label="Фото">
      <div className="elements__list">
        {cards.map((item) => (
          <Card card={item} key={item._id}/>
        ))
        }
      </div>
    </section>
    <ImagePopup />
    <PopupWithForm name="delete-card" title="Вы уверены?" />
  </main>
  )
}

export default Main;




    //   <div className="popup popup_type_avatar">
    //     <div className="popup__container popup__container_type_avatar">
    //       <h2 className="popup__heading">Обновить аватар</h2>
    //       <form className="popup__form popup__form_type_avatar" novalidate>
    //         <input type="url" id="link-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на аватар" required />
    //         <span className="popup__field-error link-input-error"></span>
    //         <button type="submit" className="popup__save-button">Сохранить</button> 
    //       </form>
    //       <button className="popup__close-button button"></button>
    //     </div>
    //   </div> 


    //   <div className="popup popup_type_personal-information">
    //     <div className="popup__container">
    //       <h2 className="popup__heading">Редактировать профиль</h2>
    //       <form className="popup__form popup__form_type_personal-information" novalidate>
    //         <input type="text" id="name-input" name="name" className="popup__field popup__field_type_name" placeholder="Имя" minlength="2" maxlength="40" required />
    //         <span className="popup__field-error name-input-error"></span>
    //         <input type="text" id="description-input" name="description" className="popup__field popup__field_type_description" placeholder="О себе" minlength="2" maxlength="200" required />
    //         <span className="popup__field-error description-input-error"></span>
    //         <button type="submit" className="popup__save-button">Сохранить</button> 
    //       </form>
    //       <button className="popup__close-button button"></button>
    //     </div>
    //   </div>

//     <div className="popup popup_type_add-new-cards">
//     <div className="popup__container">
//       <h2 className="popup__heading">Новое место</h2>
//       <form className="popup__form popup__form_type_add-new-cards" novalidate>
//         <input type="text" id="placename-input" name="placename" className="popup__field popup__field_type_place-name" placeholder="Название" minlength="2" maxlength="30" required />
//         <span className="popup__field-error placename-input-error"></span>
//         <input type="url" id="url-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на картинку" required />
//         <span className="popup__field-error url-input-error"></span>
//         <button type="submit" className="popup__save-button popup__save-button_type_add-new-cards">Сохранить</button> 
//       </form>
//       <button className="popup__close-button button"></button>
//     </div>
//   </div>

    //   <div className="popup popup_type_delete-card">
    //     <div className="popup__container popup__container_type_delete-card">
    //       <h2 className="popup__heading">Вы уверены?</h2>
    //       <button type="button" className="popup__save-button popup__save-button_type_delete-card">Да</button> 
    //       <button type="button" className="popup__close-button button"></button>
    //     </div>
    //   </div>