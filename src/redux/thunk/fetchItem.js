import { loaded } from "../actions";

const fetchItem = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const items = await response.json();

  dispatch(loaded(items));
};

export default fetchItem;
