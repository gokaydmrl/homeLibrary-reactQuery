import { useMutation, useQueryClient } from "react-query";
import postBook from "../api/postBookAction";

const useAddBook = () => {
  const queryClient = useQueryClient();

  return useMutation(postBook, {
    onMutate: async (newBook) => {
      await queryClient.cancelQueries(["books"]);
      const previousBooksData = queryClient.getQueryData(["books"]);
      queryClient.setQueryData(["books"], (prevData) => [
        ...prevData,
        { id: prevData?.data?.length + 1, ...newBook },
      ]);
      return { previousBooksData };
    },
    onError: (_err, context) => {
      queryClient.setQueryData(["books"], context.previousBooksData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });
};

export default useAddBook;
