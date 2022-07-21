import { json } from "body-parser";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Content from "../components/Content";
import { FaPencilAlt } from "react-icons/fa";
import SearchInput from "./SearchInput";

const DataTable = ({ data }) => {
  const [obje, setObje] = useState({});
  const [search, setSearch] = useState(false);

  const handleSearch = () => setSearch(!search);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {search && <SearchInput />}

      <Table>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>
              Title <button onClick={handleSearch}>ara</button>{" "}
            </th>
            <th style={{ width: "30%" }}>Author</th>
            <th style={{ width: "20%" }}>Translator</th>
            <th style={{ width: "auto" }}>Publisher</th>
            <th style={{ width: "auto" }}>Read?</th>
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
                  onClick={() => {
                    setObje(item);
                  }}
                >
                  see content
                </button>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Content obje={obje} />
    </div>
  );
};

export default DataTable;
