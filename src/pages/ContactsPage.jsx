import { useSelector, useDispatch } from 'react-redux';
import {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from '../store/contacts/contacts-api';
import { actions } from '../store/contacts/contacts-slice';
import { selectFilter } from '../store/contacts/contacts-selectors';
import Section from '../components/Section/Section';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';
import AddContactForm from '../components/AddContactForm/AddContactForm';
import contactsOperations from '../store/contacts/contacts-operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(selectFilter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );

  const handleFilter = e => dispatch(actions.setFilter(e.target.value));

  dispatch(contactsOperations.fetchContacts());

  return (
    <>
      <Section title="Add new contact">
        <AddContactForm onSubmitContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilter} />
        {contacts && (
          <Contacts
            contacts={filteredContacts.reverse()}
            onDeleteClick={deleteContact}
          />
        )}
      </Section>
    </>
  );
}
