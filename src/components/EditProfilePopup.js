import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

// function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
//   const currentUser = useContext(CurrentUserContext);
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);
  
//   function handleChange(event) {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     setValues({...values, [name]: value });
//     setErrors({...errors, [name]: target.validationMessage });
//     setIsValid(target.closest("form").checkValidity());
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
    
//     onUpdateUser({
//       name: values.name,
//       about: values.description,
//     });
//   }
  
//   useEffect(() => {
//     setValues({
//       name: currentUser.name || '',
//       description: currentUser.about || ''
//     });
//   }, [currentUser, isOpen])

//   if (Object.keys(currentUser).length > 0) {
//     return (
//       <PopupWithForm 
//         name="personal-information"
//         title="Редактировать профиль"
//         isOpen={isOpen}
//         onClose={onClose}
//         onSubmit={handleSubmit}
//       >
//         <input type="text" onChange={handleChange} value={values.name} id="name-input" name="name" className="popup__field popup__field_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
//         <span onChange={handleChange} className="popup__field-error name-input-error">{}</span>
//         <input type="text" onChange={handleChange} value={values.description} id="description-input" name="description" className="popup__field popup__field_type_description" placeholder="О себе" minLength="2" maxLength="200" required />
//         <span onChange={handleChange} className="popup__field-error description-input-error"></span>
//       </PopupWithForm>
//     )
//   } else {
//     return null;
//   }
// }

// 2 ВАРИАНТ

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  
  function handleChange(event) {
    const { name, value } = event.target;
    
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: event.target.validationMessage
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateUser({
      name: values.name,
      about: values.description,
    });
  }
  
  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      name: currentUser.name || '',
      description: currentUser.about || ''
    }));
  }, [currentUser, isOpen])

  if (Object.keys(currentUser).length > 0) {
    return (
      <PopupWithForm 
        name="personal-information"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <input type="text" onChange={handleChange} value={values.name} id="name-input" name="name" className={`popup__field popup__field_type_name ${(errors.name?.length > 1) ? 'popup__field_type_error' : ''}`} placeholder="Имя" minLength="2" maxLength="40" required />
        <span className={`popup__field-error name-input-error ${(errors.name?.length > 1) ? 'popup__field-error_active' : ''}`}>{errors.name}</span>
        <input type="text" onChange={handleChange} value={values.description} id="description-input" name="description" className={`popup__field popup__field_type_description ${(errors.description?.length > 1) ? 'popup__field_type_error' : ''}`} placeholder="О себе" minLength="2" maxLength="200" required />
        <span className={`popup__field-error description-input-error ${(errors.description?.length > 1) ? 'popup__field-error_active' : ''} `}>{errors.description}</span>
      </PopupWithForm>
    )
  } else {
    return null;
  }
}


// 1 ВАРИАНТ
// function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
//   const currentUser = useContext(CurrentUserContext);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

  

//   function handleChangeName(e) {
//     setName(e.target.value);
//   }

//   function handleChangeDescription(e) {
//     setDescription(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
    
//     onUpdateUser({
//       name,
//       about: description,
//     });
//   }
  
//   useEffect(() => {
//     setName(currentUser.name || '');
//     setDescription(currentUser.about || '');
//   }, [currentUser, isOpen])

//   return (
//     <PopupWithForm 
//       name="personal-information"
//       title="Редактировать профиль"
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <input type="text" onChange={handleChangeName} value={name} id="name-input" name="name" className="popup__field popup__field_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
//       <span className="popup__field-error name-input-error"></span>
//       <input type="text" onChange={handleChangeDescription} value={description} id="description-input" name="description" className="popup__field popup__field_type_description" placeholder="О себе" minLength="2" maxLength="200" required />
//       <span className="popup__field-error description-input-error"></span>
//     </PopupWithForm>
//   )
// }

export default EditProfilePopup;