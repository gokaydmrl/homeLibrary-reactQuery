import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import ContentModal from "./ContentModal";
import Container from "react-bootstrap/Container";
import { GiSpellBook } from "react-icons/gi";
import PatchBookModal from "./PatchBookModal";
import { HiPencilAlt } from "react-icons/hi";
import SearchInput from "./SearchInput";
import { BiSearchAlt } from "react-icons/bi";
import useDeleteBook from "../api/useDeleteBook";
import { FaEraser } from "react-icons/fa";

const DataTable = ({
  data,
  searchQuery,
  setSearchQuery,
  searchInputClicked,
  setSearchInputClicked,
}) => {
  const [obje, setObje] = useState({});
  const [show, setShow] = useState(false);
  const [bookId, setBookId] = useState(null);
  const [contentModalShow, setContentModalShow] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const { mutate: deleteBook } = useDeleteBook();

  const confirmDeleteHandler = (id) => {
    if (confirm("are you sure")) {
      deleteBook(id);
    }
  };

  const openSearchInput = (key) => {
    setSearchInputClicked(true);
    setSearchKey(key);
  };

  const syncData = useMemo(() => {
    if (searchQuery === "" || searchKey === "") {
      return data;
    }
    return data?.filter((filteredItem) => {
      return filteredItem[searchKey]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
  }, [data, searchKey, searchQuery]);


  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container fluid>
        {searchInputClicked && (
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSearchInputClicked={setSearchInputClicked}
            data={data}
            searchKey={searchKey}
          />
        )}
        {/* <input
          value={searchQuery}
          placeholder={`${searchKey} araması yapılıyor`}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        /> */}
        <Table>
          <thead>
            <tr>
              <th style={{ width: "auto" }}>
                Title
                <span
                  style={{ marginLeft: "15px", cursor: "pointer" }}
                  onClick={() => {
                    openSearchInput("title");
                  }}
                >
                  <BiSearchAlt size={25} />
                </span>
              </th>
              <th style={{ width: "auto" }}>
                Author{" "}
                <span
                  style={{ marginLeft: "15px", cursor: "pointer" }}
                  onClick={() => {
                    openSearchInput("author");
                  }}
                >
                  <BiSearchAlt size={25} />
                </span>
              </th>
              <th style={{ width: "auto" }}>
                Translator{" "}
                <span
                  style={{ marginLeft: "15px", cursor: "pointer" }}
                  onClick={() => {
                    openSearchInput("translator");
                  }}
                >
                  <BiSearchAlt size={25} />
                </span>{" "}
              </th>
              <th style={{ width: "auto" }}>
                Publisher{" "}
                <span
                  style={{ marginLeft: "15px", cursor: "pointer" }}
                  onClick={() => {
                    openSearchInput("publisher");
                  }}
                >
                  <BiSearchAlt size={25} />
                </span>{" "}
              </th>
              <th style={{ width: "auto" }}>Read?</th>
              <th style={{ width: "auto" }}>Content</th>
              <th style={{ width: "auto" }}>Update</th>
              <th style={{ width: "auto" }}>Delete</th>
            </tr>
          </thead>

          {syncData.map((item) => {
            return (
              <tbody key={item.id} id={item.title}>
                <tr style={{ backgroundColor: item.dbColor }}>
                  <td>{item.title} </td>
                  <td>{item.author} </td>
                  <td>{item.translator} </td>
                  <td>{item.publisher} </td>
                  <td>{item.read === true ? "evet" : "hayır"} </td>
                  <td style={{ backgroundColor: "white" }}>
                    <GiSpellBook
                      color={item.dbColor}
                      onClick={() => {
                        setObje(item);
                        setContentModalShow(true);
                      }}
                      cursor={"pointer"}
                      size={45}
                    />
                  </td>

                  <td style={{ backgroundColor: "white" }}>
                    <HiPencilAlt
                      color={item.dbColor}
                      onClick={() => {
                        setBookId(item.id);
                        setShow(true);
                      }}
                      cursor={"pointer"}
                      size={40}
                    />
                  </td>
                  <td style={{ backgroundColor: "white" }}>
                    <FaEraser
                      color={item.dbColor}
                      onClick={() => confirmDeleteHandler(item.id)}
                      size={40}
                      cursor={"pointer"}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
        {contentModalShow && (
          <ContentModal
            contentModalShow={contentModalShow}
            setContentModalShow={setContentModalShow}
            obje={obje}
          />
        )}
      </Container>
      {show && (
        <PatchBookModal
          bookId={bookId}
          show={show}
          setShow={setShow}
          data={data}
        />
      )}
    </div>
  );
};

export default DataTable;
