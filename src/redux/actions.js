import { ADDING, DELETE_ITEM, EDIT, LOADED, STATUSCHANGED, UPDATING } from "./actionIdentifiers";

export const adding = ({ name, author, thumbnail, price, rating, featured }) => {
  return {
    type: ADDING,
    payload: {
      name: name,
      author: author,
      thumbnail: thumbnail,
      price: price,
      rating: rating,
      featured: featured,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const editItem = ({ name, author, thumbnail, price, rating, featured, id }) => {
  return {
    type: EDIT,
    payload: {
      ename: name,
      eauthor: author,
      ethumbnail: thumbnail,
      eprice: price,
      erating: rating,
      efeatured: featured,
      eid: id,
    },
  };
};

export const updateItem = (id) => {
  return {
    type: UPDATING,
    payload: id,
  };
};

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const loaded = (items) => {
  return {
    type: LOADED,
    payload: items,
  };
};
