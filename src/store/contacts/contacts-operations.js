import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const contactsOperations = {
  fetchContacts,
};

export default contactsOperations;
