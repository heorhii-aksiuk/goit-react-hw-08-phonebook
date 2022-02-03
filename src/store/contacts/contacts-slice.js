import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

const { setFilter } = filterSlice.actions;

export const actions = {
  setFilter,
};

export const filterReducer = filterSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
