import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      alert(error.message);
    }
  },
);

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    alert(error.message);
  }
});

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
