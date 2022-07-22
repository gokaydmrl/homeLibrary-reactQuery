import { useQuery } from "react-query";
import getBooks from "../api/getBooksAction";

const fetchData = async () => {
  const { isLoading, isSuccess, data } = await useQuery(["books"], getBooks);
   console.log("query data", data);

  return { isLoading, isSuccess, data };
};

export default fetchData;
