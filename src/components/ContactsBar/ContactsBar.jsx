import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import { useContacts } from '../../hooks';
import { useLoaders } from '../../hooks/UseLoaders/useLoaders';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Empty, Title, Wrapper, Text } from './ContactsBar.styled';
import { errorNotification, successNotification } from '../../hooks/useToasts';

const ContactsBar = () => {
  const dispatch = useDispatch();
  const { allContacts, isLoading, error } = useContacts();
  const { LoaderBig } = useLoaders();
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = (numberContact, nameContact) => {
    return errorNotification(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  };

  const checkСontact = newNumber => {
    return allContacts.some(contact => contact.number === newNumber);
  };

  useEffect(() => {
    if (isAnimationActive) {
      const timer = setTimeout(() => {
        setIsAnimationActive(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimationActive]);

  const onSubmit = (name, number) => {
    if (checkСontact(number)) {
      return notifiesAlert(number, name);
    }

    dispatch(addContact({ name, number }));
    successNotification(`Contact ${name} added successfully`);
    setIsAnimationActive(true);
    setTimeout(() => {
      setIsAnimationActive(false);
    }, 3000);
  };

  return (
    <Wrapper
      className={isAnimationActive ? 'rotate-animation' : ''}
      isHeight={allContacts.length > 0}
    >
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={onSubmit} />

      <Text>Your contacts</Text>

      {!error && isLoading && <LoaderBig />}

      {!error && !isLoading && allContacts.length === 0 ? (
        <Empty>Contacts list is empty</Empty>
      ) : (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Wrapper>
  );
};

export default ContactsBar;
