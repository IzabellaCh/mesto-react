import React, { useState, useEffect } from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
        api.getServerUserInfo(),
        api.getInitialCards()
      ])
      .then(([UserInfo, InitialCards]) => {
        setUserName(UserInfo.name);
        setUserDescription(UserInfo.about);
        setUserAvatar(UserInfo.avatar);

        setCards(InitialCards);
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
    <section className="elements" aria-label="Фото">
      <div className="elements__list">
        {cards.map((item) => (
          <Card info={item} key={item._id} onCardClick={props.onCardClick} />
        ))
        }
      </div>
    </section>
  </main>
  )
}

export default Main;