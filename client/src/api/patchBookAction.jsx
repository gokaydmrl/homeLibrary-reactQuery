import axios from "axios";

const patchBookAction = ({id, bookItem} ) => {
  const patchResponse = axios.patch(
    `http://localhost:3001/books/${id}`,
    bookItem
  );
  return patchResponse.data;
};

export default patchBookAction;
