import React from "react";
import { useState } from "react";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  setSearchInputClicked,
  data,
}) => {

  const [filteredItem, setFilteredItem] = useState({});


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
        placeholder={`search for title`}
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
      <div>
        {searchQuery !== ""
          ? searchedBooks.map((item) => {
              return (
                <ul key={item.id}>
                  <li>{item.title}</li>
                </ul>
              );
            })
          : "lütfen bir harf giriniz"}
      </div>
    </div>
  );
};

export default SearchInput;
