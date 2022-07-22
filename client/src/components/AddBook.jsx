import React from "react";
import { useState } from "react";
import useAddBook from "../api/useAddBook";
import List from "./List";
import AddBookModal from "./AddBookModal";
import { GiWhiteBook } from "react-icons/gi";

const AddBook = () => {
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
      </div>

      <AddBookModal
        book={book}
        modalShow={modalShow}
        setModalShow={setModalShow}
        setBook={setBook}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <List />
    </>
  );
};

export default AddBook;
