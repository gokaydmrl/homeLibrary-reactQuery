import axios from "axios";

const postBook = async (book) => {
  const postResponse = await axios.post("http://localhost:3001/books", book);
  return postResponse.data;
};

export default postBook;
