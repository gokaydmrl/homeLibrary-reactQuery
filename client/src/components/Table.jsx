import { json } from "body-parser";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Content from "../components/Content";
import { FaPencilAlt } from "react-icons/fa";
import SearchInput from "./SearchInput";
import Container from "react-bootstrap/Container";
import { BsBookFill } from "react-icons/bs";

const DataTable = ({ data }) => {
  const [obje, setObje] = useState({});
  const [search, setSearch] = useState(false);

  const handleSearch = () => setSearch(!search);
  {
    /* <button onClick={handleSearch}>ara</button> */
  }

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {search && <SearchInput />}
      <Container fluid>
        <Table>
          <thead>
            <tr>
              <th style={{ width: "auto" }}>Title</th>
              <th style={{ width: "auto" }}>Author</th>
              <th style={{ width: "auto" }}>Translator</th>
              <th style={{ width: "auto" }}>Publisher</th>
              <th style={{ width: "auto" }}>Read?</th>
              <th style={{ width: "auto" }}>Content</th>
            </tr>
          </thead>

          {data.map((item) => {
            return (
              <tbody key={item.id}>
                <tr style={{ backgroundColor: item.dbColor }}>
                  <td>{item.title} </td>
                  <td>{item.author} </td>
                  <td>{item.translator} </td>
                  <td>{item.publisher} </td>
                  <td>{item.read === true ? "evet" : "hayır"} </td>
                  <button
                    style={{ backgroundColor: "white" }}
                    onClick={() => {
                      setObje(item);
                    }}
                  >
                    <BsBookFill color={item.dbColor} size={40} />
                  </button>
                </tr>
              </tbody>
            );
          })}
        </Table>
        <Content obje={obje} />;
      </Container>
    </div>
  );
};

export default DataTable;
