import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {RiCloseCircleFill} from "react-icons/ri"

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  setSearchInputClicked,
  data,
  searchKey,
}) => {
  if (searchKey === "title") {
    data = data.filter((filteredItem) =>
      filteredItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (searchKey === "author") {
    data = data.filter((filteredItem) =>
      filteredItem[searchKey].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

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
        autoFocus
        value={searchQuery}
        placeholder={`${searchKey} araması yapılıyor`}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button
        style={{backgroundColor:"white", border:"none"}}
        onClick={() => {
          setSearchQuery("");
          setSearchInputClicked(false);
        }}
      >
        <RiCloseCircleFill size={30} />
      </button>
      <div
        style={{
          textAlign: "left",
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
        }}
      ></div>
    </div>
  );
};

export default SearchInput;
