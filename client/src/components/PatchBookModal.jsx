import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import getBooks from "../api/getBooksAction";
import usePatchBook from "../api/usePatchBook";
import { useState } from "react";

const PatchBookModal = ({ show, setShow, data, bookId }) => {
  const patchedBookItem = data.find((i) => {
    return bookId === i.id;
  });

  const [bookToPatch, setBookToPatch] = useState({
    id: patchedBookItem.id,
    content: patchedBookItem.content,
    dbColor: patchedBookItem.dbColor,
  });

  const { mutate: patchBookItem } = usePatchBook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookToPatch({ ...bookToPatch, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      patchBookItem(bookToPatch);
      alert("letssee");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          update book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              placeholder="content"
              value={bookToPatch.content}
              name="content"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pick a Background Color</Form.Label>
            <Form.Control
              type="color"
              name="dbColor"
              value={bookToPatch.dbColor}
              onChange={handleChange}
            />
          </Form.Group>
          <button>Update Your Book</button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PatchBookModal;
