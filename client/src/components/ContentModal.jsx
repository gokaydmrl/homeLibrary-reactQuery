import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
      <Modal.Body>
        {obje.content === "" ? "no content yet" : obje.content}
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          onClick={() => {
            setContentModalShow(false);
          }}
        >
          {" "}
          close
        </Button>{" "}
      </Modal.Footer>
    </Modal>
  );
};

export default Obje;
