import axios from "axios";

const deleteBookAction = async (id) => {
  const token = localStorage.getItem("token");

  try {
    console.log("delete id", id);
    const deleteResponse = await axios.delete(
      `http://localhost:3001/books/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Completed delete request,", deleteResponse.data);
    return deleteResponse.data;
  } catch (error) {
    console.error("Error happened while deleting: ", error);
  }
};

export default deleteBookAction;
