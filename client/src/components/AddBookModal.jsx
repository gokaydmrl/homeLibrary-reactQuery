import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddBookModal = ({
  book,
  setBook,
  modalShow,
  setModalShow,
  handleSubmit,
  handleChange,
}) => {
  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          add a new book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handleChange}
              placeholder="Please enter title of the book"
              value={book.title}
              name="title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              onChange={handleChange}
              placeholder="author"
              value={book.author}
              name="author"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Translator</Form.Label>
            <Form.Control
              onChange={handleChange}
              placeholder="Please enter translator of the book"
              value={book.translator}
              name="translator"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              onChange={handleChange}
              placeholder="publisher"
              value={book.publisher}
              name="publisher"
            />
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleChange}
                placeholder="content"
                value={book.content}
                name="content"
              />
            </Form.Group>
          </Form.Group>
          <Form.Check
            onChange={() => {
              // performans kaybı ve eski booku da verebilir: setBook({ ...book, read: true });
              setBook((b) => ({ ...b, read: true }));
            }}
            type="checkbox"
            placeholder="read"
            value={book.read}
            name="read"
            label="Have you read the book?"
          />
          <Form.Group className="mb-3">
            <Form.Label>Pick a Background Color</Form.Label>
            <Form.Control
              type="color"
              name="dbColor"
              value={book.dbColor}
              onChange={handleChange}
            />
          </Form.Group>
          <button>Add Your Book</button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setModalShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBookModal;
