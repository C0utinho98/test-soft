import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getAllBooks: [],
  selectBook: ['id'],
  removeBook: ['id'],
  createBook: ['data'],
  editBook: ['data'],
  rentBook: ['id'],
  clearState: [],
});

const INITIAL_STATE = {
  books: [
    {
      id: 1,
      name: 'Livro 1',
      author: 'Autor',
      yearOfEdition: '2019',
      language: 'Portugues',
      genre: 'Aventura',
      publishingCompany: 'Panini',
      rented: false,
    },
  ],
  bookSelected: {},
};

const selectBook = (state = INITIAL_STATE, { id }) => {
  return {
    ...state,
    bookSelected: state.books.find(el => String(el.id) === id),
  };
};

const removeBook = (state = INITIAL_STATE, { id }) => {
  return {
    ...state,
    books: state.books.filter(el => el.id !== id),
  };
};

const createBook = (state = INITIAL_STATE, { data }) => {
  return {
    ...state,
    books: [...state.books, data],
  };
};

const editBook = (state = INITIAL_STATE, { data }) => {
  const { books } = state;
  const index = books.findIndex(book => book.id === data.id);
  books[index] = data;
  return {
    bookSelected: {},
    books,
  };
};

const rentBook = (state = INITIAL_STATE, { id }) => {
  const { books } = state;
  const index = books.findIndex(book => String(book.id) === String(id));
  const book = books[index];
  books[index] = { ...book, rented: !book.rented };
  return {
    bookSelected: { ...state.bookSelected, rented: !state.bookSelected.rented },
    books,
  };
};

const clearState = (state = INITIAL_STATE) => {
  return {
    ...state,
    bookSelected: {},
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SELECT_BOOK]: selectBook,
  [Types.REMOVE_BOOK]: removeBook,
  [Types.CREATE_BOOK]: createBook,
  [Types.RENT_BOOK]: rentBook,
  [Types.EDIT_BOOK]: editBook,
  [Types.CLEAR_STATE]: clearState,
});
