import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/contacts/contacts-slice';
import {
  selectContacts,
  selectFilter,
} from '../store/contacts/contacts-selectors';
import Section from '../components/Section/Section';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';
import AddContactForm from '../components/AddContactForm/AddContactForm';
import contactsOperations from '../store/contacts/contacts-operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleFilter = e => dispatch(actions.setFilter(e.target.value));
  const addContact = contact => {
    dispatch(contactsOperations.addContact(contact));
  };

  //TODO: Переместить в селекторы
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter),
      )
    : contacts;

  return (
    <>
      <Section title="Add new contact">
        <AddContactForm onSubmitContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilter} />
        {Array.isArray(contacts) && (
          <Contacts
            contacts={filteredContacts.reverse()}
            // onDeleteClick={deleteContact}
          />
        )}
      </Section>
    </>
  );
}
