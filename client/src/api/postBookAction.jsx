import axios from "axios";

const postBook = async (book) => {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const postResponse = await axios.post(`http://localhost:3001/books`, book, {
    header: { Authorization: `Bearer ${token}` },
  });
  return postResponse.data;
};

export default postBook;
