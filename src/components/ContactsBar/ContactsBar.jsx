import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import { useContacts } from '../../hooks';
import { useLoaders } from '../../hooks/UseLoaders/useLoaders';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Message, Title, Wrapper, Text } from './ContactsBar.styled';
import { errorNotification, successNotification } from '../../hooks/useToasts';

const ContactsBar = () => {
  return (
    <Wrapper isHeight={allContacts.length > 0}>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={onSubmit} />

      <Text>Your contacts</Text>

      {!error && isLoading && <LoaderBig />}

      {!error && !isLoading && allContacts.length === 0 ? (
        <Message>Contacts list is empty</Message>
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
