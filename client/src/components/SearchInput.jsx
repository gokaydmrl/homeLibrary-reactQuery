import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { RiCloseCircleFill } from "react-icons/ri";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  setSearchInputClicked,
  data,
  searchKey,
}) => {
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
        placeholder={`searching for ${searchKey} `}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button
        style={{ backgroundColor: "white", border: "none" }}
        onClick={() => {
          setSearchQuery("");
          setSearchInputClicked(false);
        }}
      >
        <RiCloseCircleFill size={30} />
      </button>
    </div>
  );
};

export default SearchInput;
