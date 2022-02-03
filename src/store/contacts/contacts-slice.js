import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

const { setFilter } = filterSlice.actions;

export const actions = {
  setFilter,
};

export const filterReducer = filterSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
