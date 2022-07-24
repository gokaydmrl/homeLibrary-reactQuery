import axios from "axios";

const patchBookAction = async ({ id, bookItem }) => {
  try {
    const patchResponse = await axios.patch(
      `http://localhost:3001/books/${id}`,
      bookItem
    );
    console.log("Completed patch request,", patchResponse.data);
    return patchResponse.data;
  } catch (error) {
    console.error("Error happened: ", error);
  }
};

export default patchBookAction;
