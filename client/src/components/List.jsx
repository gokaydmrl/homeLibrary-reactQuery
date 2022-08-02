import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import getBooks from "../api/getBooksAction";
import DataTable from "./Table";
import Spinner from "react-bootstrap/Spinner";

const List = ({
  isLoading,
  isSuccess,
  data,
  searchQuery,
  setSearchQuery,
  searchInputClicked,
  setSearchInputClicked,
}) => {
  // const queryClient = useQueryClient();
  // const query = useQuery(["books"], getBooks);
  // console.log("query data", query);
  // const { isLoading, isSuccess, data } = useQuery(["books"], getBooks);

  return (
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
  );
};

export default List;
