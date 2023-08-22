import ContactItem from '../ContactListItem/ContactListItem';
import { Item, List, Wrapper } from './ContactList.styled';
import { useContacts } from '../../hooks/useContacts';

const ContactsList = () => {
  const { filteredContacts } = useContacts();

  return (
    <Wrapper>
      {filteredContacts.length > 0 ? (
        <>
          <List>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ContactItem id={id} name={name} number={number} />
              </Item>
            ))}
          </List>
        </>
      ) : (
        <b>Contacts not found</b>
      )}
    </Wrapper>
  );
};

export default ContactsList;
