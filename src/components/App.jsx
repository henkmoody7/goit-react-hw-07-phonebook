import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsForm } from './ContactsForm/ContactsForm';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <ContactsForm />
      <Filter />

      <ContactsList />
    </div>
  );
}
