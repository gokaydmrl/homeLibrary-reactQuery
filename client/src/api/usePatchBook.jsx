// import { useMutation, useQueryClient } from "react-query";
// import patchBookAction from "./patchBookAction";

// const usePatchBook = () => {
//   const queryClient = useQueryClient();

//   return useMutation(patchBookAction, {
//     onMutate: async (bookToPatch) => {
//       await queryClient.cancelQueries(["books", bookToPatch.id]);
//       const previousBook = queryClient.getQueryData(["books", bookToPatch.id]);
//       console.log("previous book", previousBook);
//       console.log("book to patch", bookToPatch, "id'si", bookToPatch.id);
//       queryClient.setQueryData(["books", {id: bookToPatch.id}], bookToPatch);
//       return { previousBook, bookToPatch };
//     },
//     onError: (err, bookToPatch, context) => {
//       queryClient.setQueryData(
//         ["books", context.bookToPatch.id],
//         context.previousBook
//       )

//       console.log("onerror aşamasında", bookToPatch);
//       console.log("err", err);
//     },
//     onSettled: (bookToPatch) => {
//       queryClient.invalidateQueries(["books", bookToPatch.id]);
//       console.log("on settleddaki obje", bookToPatch);
//     },
//   });
// };

// export default usePatchBook;


import { useMutation, useQueryClient } from "react-query";
import patchBookAction from "./patchBookAction";

const usePatchBook = () => {
  const queryClient = useQueryClient();

  return useMutation(patchBookAction, {
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data, bookToPatch) => {
      console.log("bktopatch", bookToPatch);
      queryClient.setQueryData(["books", { id: bookToPatch.id }], data);
      console.log("data",data);
    },
  });
};

export default usePatchBook;
