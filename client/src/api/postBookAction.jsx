import axios from "axios";

const postBook = async (book) => {
  const token = localStorage.getItem("token");

  const postResponse = await axios.post(`http://localhost:3001/books`, book, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return postResponse.data;
};

export default postBook;
