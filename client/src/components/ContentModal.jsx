import React from "react";
import Modal from "react-bootstrap/Modal";

const Obje = ({ contentModalShow, setContentModalShow, obje }) => {
  return (
    <Modal
      show={contentModalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          read content
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{obje.content} </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            setContentModalShow(false);
          }}
        >
          {" "}
          close
        </button>{" "}
      </Modal.Footer>
    </Modal>
  );
};

export default Obje;
