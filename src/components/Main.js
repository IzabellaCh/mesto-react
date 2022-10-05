import React, { useState, useEffect, useContext } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        alert(`Ошибка при клике на лайк: ${err}`);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter(el => el._id !== card._id));
      })
      .catch((err) => {
        alert(`Ошибка при удалении карточки: ${err}`);
      })
  }

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err)=> {
        alert(`Ошибка при загрузке массива карточек: ${err}`)
      })
  }, [])

  return (
  <main className="main padding-side">
    <section className="profile" aria-label="Профиль">
      <div className="profile__data">
        <img className="profile__photo" alt="Аватар." src={currentUser.avatar} />
        <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
      </div>
      <button className="profile__add-button button" onClick={props.onAddPlace}></button>
    </section>
    <section className="elements" aria-label="Фото">
      <div className="elements__list">
        {cards.map((item) => (
          <Card info={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        ))
        }
      </div>
    </section>
  </main>
  )
}

export default Main;