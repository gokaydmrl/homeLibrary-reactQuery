import axios from "axios";

const deleteBookAction = async (id) => {
  try {
    console.log("delete id", id);
    const deleteResponse = await axios.delete(
      `http://localhost:3001/books/${id}`
    );
    console.log("Completed delete request,", deleteResponse.data);
    return deleteResponse.data;
  } catch (error) {
    console.error("Error happened while deleting: ", error);
  }
};

export default deleteBookAction;
