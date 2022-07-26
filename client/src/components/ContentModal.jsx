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
          update book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>noth</Modal.Body>
    </Modal>
  );
};

export default Obje;
