import { useMutation, useQueryClient } from "react-query";
import patchBookAction from "./patchBookAction";

const usePatchBook = () => {
  const queryClient = useQueryClient();

  return useMutation(patchBookAction, {
    onMutate: (bookToPatch) => {
      console.log("book to patch", bookToPatch);
      queryClient.setQueryData(["bookToPatch", bookToPatch.id]);
      return { bookToPatch };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });
};

export default usePatchBook;
