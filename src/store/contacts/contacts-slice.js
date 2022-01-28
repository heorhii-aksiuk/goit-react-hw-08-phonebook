import { createSlice } from '@reduxjs/toolkit';

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
