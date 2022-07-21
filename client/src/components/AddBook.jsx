import React from "react";
import { useState } from "react";
import useAddBook from "../api/useAddBook";
import List from "./List";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="title"
          value={book.title}
          name="title"
        />
        <br />
        <label>read?</label>
        <input
          onChange={() => {
            // performans kaybı ve eski booku da verebilir: setBook({ ...book, read: true });
            setBook((b) => ({ ...b, read: true }));
          }}
          type="checkbox"
          placeholder="read"
          value={book.read}
          name="read"
        />
        <br />
        <input
          onChange={handleChange}
          placeholder="content"
          value={book.content}
          name="content"
        />
        <br />
        <input
          onChange={handleChange}
          placeholder="author"
          value={book.author}
          name="author"
        />
        <br />
        <input
          onChange={handleChange}
          placeholder="translator"
          value={book.translator}
          name="translator"
        />
        <br />
        <input
          onChange={handleChange}
          placeholder="publisher"
          value={book.publisher}
          name="publisher"
        />
        <br />
        <input
          type="color"
          name="dbColor"
          value={book.dbColor}
          onChange={handleChange}
        />
        <button>add book</button>
      </form>
      <List />
    </div>
  );
};

export default AddBook;
