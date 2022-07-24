import axios from "axios";

const getBooks = async () => {
  console.log("calling get books")
  const response = await axios.get("http://localhost:3001/books");
  return response.data;
};

export default getBooks;
