import { useState } from "react";
import useAddBook from "../api/useAddBook";
import List from "./List";
import AddBookModal from "./AddBookModal";
import { GiWhiteBook } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import SearchInput from "../components/SearchInput";

import { useQuery } from "@tanstack/react-query";
import getBooks from "../api/getBooksAction";
import { useMemo } from "react";

const AddBook = () => {
  // const query = useQuery(["books"], getBooks);
  // console.log("query data", query.data);
  const { isLoading, isSuccess, data } = useQuery(["books"], getBooks, {
    select: (data) => data.sort((x, y) => y.id - x.id),
  });
  const filteredData =  useMemo(() => data, [data])
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInputClicked, setSearchInputClicked] = useState(false);

  

  console.log("data from addbook", data);

  const [book, setBook] = useState({
    id: "",
    author: "",
    title: "",
    content: "",
    read: false,
    translator: "",
    publisher: "",
    dbColor: "white",
  });

  const [modalShow, setModalShow] = useState(false);

  const { mutate: postBookItem } = useAddBook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.table("this book", book);
      postBookItem(book);
      alert("başarılı");
      setBook({
        id: "",
        author: "",
        title: "",
        content: "",
        read: false,
        translator: "",
        publisher: "",
        dbColor: "white",
      });
      setModalShow(false);
    } catch (error) {
      console.log("this error", error);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "29px",
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <button
          size="lg"
          style={{ backgroundColor: "white", border: "none" }}
          onClick={() => {
            setModalShow(true);
          }}
        >
          <GiWhiteBook size={60} />
        </button>
        <button
          size="lg"
          style={{ backgroundColor: "white", border: "none" }}
          onClick={() => {
            setSearchInputClicked(!searchInputClicked);
            setSearchQuery("");
          }}
        >
          <GiArchiveResearch size={60} />
        </button>
      </div>

      <AddBookModal
        book={book}
        modalShow={modalShow}
        setModalShow={setModalShow}
        setBook={setBook}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <List
        isLoading={isLoading}
        isSuccess={isSuccess}
        data={filteredData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchInputClicked={searchInputClicked}
        setSearchInputClicked={setSearchInputClicked}
      />
    </>
  );
};

export default AddBook;
