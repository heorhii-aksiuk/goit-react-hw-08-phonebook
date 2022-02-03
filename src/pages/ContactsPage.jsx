import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/contacts/contacts-slice';
import {
  selectContacts,
  selectFilter,
  selectFilteredContacts,
} from '../store/contacts/contacts-selectors';
import contactsOperations from '../store/contacts/contacts-operations';
import Section from '../components/Section/Section';
import AddContactForm from '../components/AddContactForm/AddContactForm';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleFilter = event => dispatch(actions.setFilter(event.target.value));

  const addContact = contact => {
    dispatch(contactsOperations.addContact(contact));
  };

  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      <Section title="Add new contact">
        <AddContactForm onSubmitContact={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter value={filter} onChange={handleFilter} />
          <Contacts contacts={filteredContacts} onDeleteClick={deleteContact} />
        </Section>
      )}
    </>
  );
}
