import React from "react";
import { useQuery, useQueryClient } from "react-query";
import getBooks from "../api/getBooksAction";
import DataTable from "./Table";

const List = () => {
  // const queryClient = useQueryClient();
  const query = useQuery(["books"], getBooks);
  console.log("query data", query);

  const { isLoading, isSuccess, data } = useQuery(["books"], getBooks);

  return (
    <div className="App">
      <h2>Book List</h2>

      {isLoading === true && "loading..."}
      {isSuccess === true && <DataTable data={data} />}
    </div>
  );
};

export default List;
