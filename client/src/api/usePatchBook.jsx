import { useMutation, QueryClient } from "@tanstack/react-query";
import { queryClient } from "../App";
import patchBookAction from "./patchBookAction";

const usePatchBook = () => {
  return useMutation(patchBookAction, {
    onSuccess: (updatedBook) => {
      queryClient.setQueryData(["books"], (prevBooks) =>
        prevBooks.map((pb) => (pb.id === updatedBook.id ? updatedBook : pb))
      );
    },
    onError: (err, bookToPatch, context) => {
      queryClient.setQueryData(
        ["books", context.bookToPatch.id],
        context.previousBook
      );

      console.log("onerror aşamasında", bookToPatch);
      console.log("err", err);
    },
  });
};

export default usePatchBook;

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import patchBookAction from "./patchBookAction";

// const usePatchBook = () => {
//   const queryClient = useQueryClient();

//   return useMutation(patchBookAction(), {
//     // Notice the second argument is the variables object that the `mutate` function receives
//     onSuccess: (data, bookToBePatched) => {
//       console.log("bktopatch", bookToBePatched);
//       queryClient.setQueryData(["books", { id: bookToBePatched.id }], data);
//       console.log("data", data);
//     },
//   });
// };

// export default usePatchBook;
