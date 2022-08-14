import { useState } from "react";
import useAddBook from "../hooks/useAddBook";
import List from "./List";
import AddBookModal from "./AddBookModal";
import { GiWhiteBook } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import getBooks from "../api/getBooksAction";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import "../App.css";

const AddBook = () => {
  // const query = useQuery(["books"], getBooks);
  // console.log("query data", query.data);
  const { isLoading, isSuccess, data } = useQuery(["books"], getBooks, {
    select: (data) => data.sort((x, y) => y.id - x.id),
  });
  const filteredData = useMemo(() => data, [data]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInputClicked, setSearchInputClicked] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log("data from addbook", data);

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

    if (book.title === "") {
      alert("title cannot be left blank");
      return;
    }

    try {
      console.table("this book", book);
      postBookItem(book);

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
          padding: "30px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <button
          disabled={token ? false : true}
          size="lg"
          style={{
            backgroundColor: "white",
            border: "none",
            marginLeft: "30px",
          }}
          onClick={() => {
            setModalShow(true);
          }}
        >
          <GiWhiteBook size={60} />
        </button>

        <button
          onClick={() => {
            navigate("../login", { replace: true });
            localStorage.removeItem("token");
          }}
          style={{
            border: "none",
            backgroundColor: "white",
            float: "right",
          }}
        >
          <GoSignOut size={30} />
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
