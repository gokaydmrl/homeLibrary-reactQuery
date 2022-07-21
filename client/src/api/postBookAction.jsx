import axios from "axios";

const postBook = (book) => {
  const postResponse = axios.post("http://localhost:3001/books", book);
  return postResponse.data;
};

export default postBook;
