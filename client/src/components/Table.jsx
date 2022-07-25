import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Content from "../components/Content";
import Container from "react-bootstrap/Container";
import { MdOutlineMenuBook } from "react-icons/md";
import PatchBookModal from "./PatchBookModal";
import {HiPencilAlt} from "react-icons/hi"

const DataTable = ({ data }) => {
  const [obje, setObje] = useState({});
  const [show, setShow] = useState(false);
  const [bookId, setBookId] = useState(null);

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
              <th style={{ width: "auto" }}>Update</th>
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
                    <MdOutlineMenuBook size={40} />
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
        <Content obje={obje} />
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
