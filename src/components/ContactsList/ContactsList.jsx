import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { List, LIstItem } from './ContactsList.styled';
import { Button } from 'components/ContactsForm/ContactsForm.styled';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onDelete = id => {
    dispatch(deleteContacts(id));
  };
  return (
    <div>
      <List>
        {filteredContacts.map(contact => {
          return (
            <LIstItem key={contact.id}>
              {contact.name}: {contact.number}
              <Button type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </Button>
            </LIstItem>
          );
        })}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
