import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts-api';
import { filterReducer, contactsReducer } from './contacts/contacts-slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authReducer } from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    auth: authReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
