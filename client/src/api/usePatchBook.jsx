import { useMutation, useQueryClient } from "react-query";
import patchBookAction from "./patchBookAction";

const usePatchBook = (patchedBook) => {
  const queryClient = useQueryClient();

  return useMutation(patchBookAction, {
    onMutate: (bookToPatch) => {
      queryClient.setQueryData(["patchedBook", patchedBook.id], bookToPatch);
    },
    onSuccess: () => {
      queryClient.InvalidateQueries(["patchedBook", patchedBook.id]);
    },
  });
};

export default usePatchBook;
