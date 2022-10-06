import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);
//   console.log(currentUser);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e){
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateUser({
      name,
      about: description,
    });
  }
  
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  return (
    <PopupWithForm 
      name="personal-information"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="text" onChange={handleChangeName} value={name} id="name-input" name="name" className="popup__field popup__field_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="popup__field-error name-input-error"></span>
      <input type="text" onChange={handleChangeDescription} value={description} id="description-input" name="description" className="popup__field popup__field_type_description" placeholder="О себе" minLength="2" maxLength="200" required />
      <span className="popup__field-error description-input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;