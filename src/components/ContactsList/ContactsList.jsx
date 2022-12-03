import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  getContacts,
  getFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { List, LIstItem } from './ContactsList.styled';
import { Button } from 'components/ContactsForm/ContactsForm.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {filteredContacts.length > 0 && (
        <>
          {' '}
          <h2>Contacts</h2>
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
        </>
      )}
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
