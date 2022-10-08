import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm.js';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = null;
  }

  return (
    <PopupWithForm 
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input ref={avatarRef} type="url" id="link-input" name="link" className="popup__field popup__field_type_link-img" placeholder="Ссылка на аватар" required />
      <span className="popup__field-error link-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;