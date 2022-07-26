import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import ContentModal from "./ContentModal";
import Container from "react-bootstrap/Container";
import { MdOutlineMenuBook } from "react-icons/md";
import PatchBookModal from "./PatchBookModal";
import { HiPencilAlt } from "react-icons/hi";
import SearchInput from "./SearchInput";

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

  console.log("bu hangi şov", syncData);

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
                  style={{ marginLeft: "20px", cursor:"pointer" }}
                  onClick={() => {
                    openSearchInput("title");
                  }}
                >
                  ara
                </span>
              </th>
              <th style={{ width: "auto" }}>
                Author{" "}
                <span
                  onClick={() => {
                    openSearchInput("author");
                  }}
                >
                  ara
                </span>
              </th>
              <th style={{ width: "auto" }}>Translator</th>
              <th style={{ width: "auto" }}>Publisher</th>
              <th style={{ width: "auto" }}>Read?</th>
              <th style={{ width: "auto" }}>Content</th>
              <th style={{ width: "auto" }}>Update</th>
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
                    <MdOutlineMenuBook
                      onClick={() => {
                        setObje(item);
                        setContentModalShow(true);
                      }}
                      cursor={"pointer"}
                      size={40}
                    />
                  </td>

                  <td
                    style={{ backgroundColor: "white" }}
                    onClick={() => {
                      setBookId(item.id);
                      setShow(true);
                    }}
                  >
                    <HiPencilAlt size={40} />
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
