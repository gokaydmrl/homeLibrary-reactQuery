import axios from "axios";

const getBooks = async () => {
  const token = localStorage.getItem("token");

  try {
    console.log("calling get books");
    console.log("get action token", token);
    const response = await axios.get(`http://localhost:3001/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("get error axios", error);
  }
};

export default getBooks;
