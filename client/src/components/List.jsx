import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import getBooks from "../api/getBooksAction";
import DataTable from "./Table";
import Spinner from "react-bootstrap/Spinner";
import Login from "./Login";
import { Link } from "react-router-dom";
import NoToken from "./NoToken";

const List = ({
  isLoading,
  isSuccess,
  data,
  searchQuery,
  setSearchQuery,
  searchInputClicked,
  setSearchInputClicked,
}) => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <NoToken />
      ) : (
        <div className="App">
          <h2>Book List</h2>
          <h3>{data?.length === 0 && "start adding book"}</h3>
          {isLoading === true && (
            <Spinner
              style={{ paddingTop: "10px" }}
              animation="border"
              role="status"
            />
          )}
          {isSuccess === true && (
            <DataTable
              data={data}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchInputClicked={searchInputClicked}
              setSearchInputClicked={setSearchInputClicked}
            />
          )}
        </div>
      )}
    </>
  );
};

export default List;
