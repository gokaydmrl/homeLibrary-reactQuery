import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import getBooks from "../api/getBooksAction";

const PatchBookModal = ({ show, setShow, data }) => {
  //  const { data } = useQuery(["books"], getBooks);

  const { id } = useParams();

  console.log("patchilecek data", data);

  const bookItem = data.find((i) => {
    return id === i.id;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      alert("letssee");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={false}
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
              //   onChange={handleChange}
              placeholder="content"
              //   value={book.content}
              name="content"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pick a Background Color</Form.Label>
            <Form.Control
              type="color"
              name="dbColor"
              //   value={book.dbColor}
              //   onChange={handleChange}
            />
          </Form.Group>
          <button>Update Your Book</button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
        //   onClick={() => {
        //     setModalShow(false);
        //   }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PatchBookModal;
