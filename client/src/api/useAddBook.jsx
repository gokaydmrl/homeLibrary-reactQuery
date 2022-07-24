import { useMutation, useQueryClient } from "@tanstack/react-query";
import postBook from "../api/postBookAction";
import { queryClient } from "../App";

const useAddBook = () => {
  return useMutation(postBook, {
    onMutate: async (newBook) => {
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
