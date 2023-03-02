import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/actions";

const Topbar = () => {
  const filterStatus = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();

  const filterItems = (status) => {
    dispatch(statusChanged(status));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${filterStatus === "All" && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => filterItems("All")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filterStatus === "Featured" && "active-filter"}`}
          id="lws-filterFeatured"
          onClick={() => filterItems("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Topbar;
