import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchItem from "../redux/thunk/fetchItem";
import BookItem from "./BookItem";
import Form from "./Form";
import Topbar from "./Topbar";

const Container = () => {
  const state = useSelector((state) => state.bookList);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem);
  }, [dispatch]);

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <Topbar />

          <div className="lws-bookContainer">
            {state
              .filter((item) => {
                const { status } = filters;
                switch (status) {
                  case "Featured":
                    return item.featured;
                  case "All":
                    return item.featured;
                  default:
                    return true;
                }
              })
              .map((item) => (
                <BookItem item={item} key={item.id} />
              ))}
          </div>
        </div>

        <div>
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Container;
