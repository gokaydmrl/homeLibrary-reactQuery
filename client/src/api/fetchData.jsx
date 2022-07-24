import { useQuery } from "@tanstack/react-query";
import getBooks from "../api/getBooksAction";

const fetchData = () => {
  const { isLoading, isSuccess, data } = useQuery(["books"], getBooks);
  console.log("query data", data);

  return { isLoading, isSuccess, data };
};

export default fetchData;
