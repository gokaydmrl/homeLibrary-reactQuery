import { useMutation, QueryClient } from "@tanstack/react-query";
import { queryClient } from "../App";
import deleteBookAction from "../api/deleteBookAction";

const useDeleteBook = () => {
  return useMutation(deleteBookAction, {
    onMutate: (deletedBook) => {
      queryClient.setQueryData(["books"], (prevBooks) => {
        console.log("prevbooks", prevBooks);
        prevBooks.filter((item) => {
          console.log("deleted Book", deletedBook);
          return item.id !== deletedBook.id;
        });
        return prevBooks;
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });
};

export default useDeleteBook;
