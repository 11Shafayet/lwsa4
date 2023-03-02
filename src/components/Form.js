import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding } from "../redux/actions";

const Form = () => {
  const editState = useSelector((state) => state.editList);
  const [editStateValue, setEditStateValue] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: "",
    id: "",
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.name === "name") {
      setEditStateValue({ ...editStateValue, name: e.target.value });
    } else if (e.target.name === "author") {
      setEditStateValue({ ...editStateValue, author: e.target.value });
    } else if (e.target.name === "thumbnail") {
      setEditStateValue({ ...editStateValue, thumbnail: e.target.value });
    } else if (e.target.name === "price") {
      setEditStateValue({ ...editStateValue, price: e.target.value });
    } else if (e.target.name === "rating") {
      setEditStateValue({ ...editStateValue, rating: e.target.value });
    } else if (e.target.name === "featured") {
      setEditStateValue({ ...editStateValue, featured: e.target.checked });
    }
  };

  useEffect(() => {
    setEditStateValue(editState);
  }, [editState]);

  // console.log(editStateValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editState.id) {
      // console.log(editStateValue);
    } else {
      const name = e.target.querySelector("#input-Bookname").value;
      const author = e.target.querySelector("#input-Bookauthor").value;
      const thumbnail = e.target.querySelector("#input-Bookthumbnail").value;
      const price = e.target.querySelector("#input-Bookprice").value;
      const rating = e.target.querySelector("#input-Bookrating").value;
      const featured = e.target.querySelector("#input-Bookfeatured").checked;
      dispatch(
        adding({
          name,
          author,
          thumbnail,
          price,
          rating,
          featured,
        })
      );
    }
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">{editState.id ? "Update Book" : "Add New Book"}</h4>
      <form className="book-form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={editStateValue.name}
            onChange={handleInput}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={editStateValue.author}
            onChange={handleInput}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={editStateValue.thumbnail}
            onChange={handleInput}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={editStateValue.price}
              onChange={handleInput}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={editStateValue.rating}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={editStateValue.featured}
            onChange={handleInput}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {editState.id ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default Form;
