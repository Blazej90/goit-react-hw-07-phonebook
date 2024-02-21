// import { createSlice, createAction } from '@reduxjs/toolkit';

// const addContact = createAction('contacts/addContact');
// const deleteContact = createAction('contacts/deleteContact');
// const setContacts = createAction('contacts/setContacts');

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(addContact, (state, action) => {
//         state.push(action.payload);
//       })
//       .addCase(deleteContact, (state, action) => {
//         return state.filter(contact => contact.id !== action.payload);
//       })
//       .addCase(setContacts, (state, action) => {
//         return action.payload;
//       });
//   },
// });

// export { addContact, deleteContact, setContacts };
// export default contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    // Dodajemy akcję do ustawiania kontaktów
    setContacts: (state, action) => {
      return action.payload; // Ustawiamy kontakty z payloadu akcji
    },
    // Dodajemy akcję do dodawania nowego kontaktu
    addContact: (state, action) => {
      state.push(action.payload); // Dodajemy nowy kontakt do stanu
    },
    // Dodajemy akcję do usuwania kontaktu
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload); // Usuwamy kontakt ze stanu na podstawie ID
    },
  },
  extraReducers: builder => {
    // Tutaj pozostawiamy obsługę asynchronicznych akcji
  },
});

// Eksportujemy akcje
export const { setContacts, addContact, deleteContact } = contactsSlice.actions;

// Eksportujemy reducer
export default contactsSlice.reducer;
