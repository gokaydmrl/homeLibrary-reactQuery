import React from "react";
import { useState } from "react";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  setSearchInputClicked,
  data,
  searchKey,
}) => {
  const text = "title";

  const [filteredItem, setFilteredItem] = useState({
    text: text,
  });

  const searchedBooks = data.filter((filteredItem) =>
    filteredItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <input
        value={searchQuery}
        placeholder={searchKey === "title" ? "title araması" : "beklemede"}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setSearchQuery("");
          setSearchInputClicked(false);
        }}
      >
        close
      </button>
      <div
        style={{
          textAlign: "left",
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
        }}
      >
        {searchQuery !== ""
          ? searchedBooks.map((item) => {
              return (
                <ul key={item.id}>
                  <a style={{ color: "black" }} href={`#${item.title}`}>
                    {item.title}
                  </a>
                </ul>
              );
            })
          : "lütfen bir harf giriniz"}
      </div>
    </div>
  );
};

export default SearchInput;
