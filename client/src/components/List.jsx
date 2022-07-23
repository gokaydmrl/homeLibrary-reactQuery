import React from "react";
// import { useQuery } from "react-query";
// import getBooks from "../api/getBooksAction";
import DataTable from "./Table";
import Spinner from "react-bootstrap/Spinner";

const List = ({isLoading, isSuccess, data}) => {
  // const queryClient = useQueryClient();
  // const query = useQuery(["books"], getBooks);
  // console.log("query data", query);
  // const { isLoading, isSuccess, data } = useQuery(["books"], getBooks);



  return (
    <div className="App">
      <h2>Book List</h2>

      {isLoading === true && (
        <Spinner
          style={{ paddingTop: "10px" }}
          animation="border"
          role="status"
        />
      )}
      {isSuccess === true && <DataTable data={data} />}
    </div>
  );
};

export default List;
