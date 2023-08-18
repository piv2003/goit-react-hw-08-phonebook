import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { createPortal } from 'react-dom';
import { patchContacts } from '../../redux/contacts/operations';
import {
  Button,
  FormBox,
  FormikWrapper,
  InputName,
  Message,
  InputTel,
  Overlay,
  Title,
} from './Modal.styled';
import { useContacts } from '../../hooks/useContacts';
import { errorNotification, successNotification } from '../../hooks/useToasts';

const modalRoot = document.querySelector('#modal-root');

const userSchema = object({
  name: string().matches(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ),
  number: string().matches(
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  ),
});

const Modal = ({ onCloseModal, id, name, number }) => {
  const dispatch = useDispatch();
  const { allContacts } = useContacts();

  const initialValues = {
    name: name,
    number: number,
  };

  useEffect(() => {
    const handleEscDown = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onCloseModal]);

  return createPortal();
};

export default Modal;
