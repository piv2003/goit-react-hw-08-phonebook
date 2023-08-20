import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage } from 'formik';
import { userSchema } from '../../services/userSchema';
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

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    for (const contact of allContacts) {
      if (number === contact.number) {
        errorNotification(
          `A contact with this number already exists under the name ${contact.name}`
        );
        return;
      }
    }
    dispatch(patchContacts({ name, id, number }));
    onCloseModal();
    successNotification('Сontact successfully changed');
    resetForm();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <FormikWrapper
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <FormBox autoComplete="off">
          <Title>Change a contact's name or number</Title>
          <label>
            <span>Name</span>
            <InputName
              placeholder="Enter new contact name"
              type="text"
              name="name"
            />
            <ErrorMessage component={Message} name="name" />
          </label>
          <label>
            <span>Phone</span>
            <InputTel
              placeholder="Enter new contact phone"
              type="tel"
              name="number"
            />
            <ErrorMessage component={Message} name="number" />
          </label>
          <Button type="submit">Change</Button>
        </FormBox>
      </FormikWrapper>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
