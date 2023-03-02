import { ADDING, DELETE_ITEM, EDIT, LOADED, STATUSCHANGED } from "./actionIdentifiers";

const initialState = {
  bookList: [],
  editList: {},
  filters: {
    status: "All",
  },
};

// generating an unique id for new adding book
const nextItemId = (bookList) => {
  const maxId = bookList.reduce((maxId, item) => Math.max(item.id, maxId), -1);
  return maxId + 1;
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDING:
      const { name, author, thumbnail, price, rating, featured } = action.payload;
      const newObj = {
        name: name,
        author: author,
        thumbnail: thumbnail,
        price: price,
        rating: rating,
        featured: featured,
        id: nextItemId(state.bookList),
      };
      return { ...state, bookList: [...state.bookList, newObj] };

    case EDIT:
      const { ename, eauthor, ethumbnail, eprice, erating, efeatured, eid } = action.payload;
      const newEditObj = {
        name: ename,
        author: eauthor,
        thumbnail: ethumbnail,
        price: eprice,
        rating: erating,
        featured: efeatured,
        id: eid,
      };
      return { ...state, editList: newEditObj };

    case DELETE_ITEM:
      return {
        ...state,
        bookList: state.bookList.filter((item) => item.id !== action.payload),
      };

    case STATUSCHANGED:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };

    default:
      return state;
  }
};

export default bookReducer;
