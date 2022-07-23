import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Content from "../components/Content";
import SearchInput from "./SearchInput";
import Container from "react-bootstrap/Container";
import { BsBookFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PatchBookModal from "./PatchBookModal";

const DataTable = ({ data }) => {
  const [obje, setObje] = useState({});
  const [show, setShow] = useState(false);

  console.log("tabledan data:", data);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
                  <td
                    style={{ backgroundColor: "white" }}
                    onClick={() => {
                      setObje(item);
                    }}
                  >
                    <BsBookFill color={item.dbColor} size={40} />
                  </td>

                  <td
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <Link to={`/${item.id}`}>update</Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
        <Content obje={obje} />;
        {show && <PatchBookModal show={show} setShow={setShow} data={data} />}
      </Container>
    </div>
  );
};

export default DataTable;
