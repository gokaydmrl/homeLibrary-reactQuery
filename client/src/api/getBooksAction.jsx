import axios from "axios";

const getBooks = async () => {
  const ownerID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  console.log("calling get books");
  const response = await axios.get(`http://localhost:3001/books/${ownerID}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default getBooks;
