import React, { useRef, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();
  const [submitIsDone, setSubmitIsDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value, setSubmitIsDone);
  }

  useEffect(() => {
    if (submitIsDone) {
      avatarRef.current.value = null;
    }
    return (
      setSubmitIsDone(false)
    )
  }, [isOpen, submitIsDone])
  
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