import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RegisterInputs = ({
  user,
  handleSubmit,
  handleChange,
  err,
  nameError,
}) => {
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        height: "100",
        margin: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
      autoComplete="off"
    >
      <Form.Group className="mb-3">
        <Form.Label
          style={{
            margin: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          user name
        </Form.Label>

        <Form.Control
          placeholder="please enter your user name"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          autoComplete="off"
        />
        <Form.Text style={{ color: "red" }}>
          {err !== "" && err} {nameError !== "" && nameError}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label
          style={{
            margin: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          password
        </Form.Label>

        <Form.Control
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>
      <Button
        type="submit"
        style={{
          marginBottom: "30px",
        }}
      >
        Register
      </Button>
      <br />
      <Link to="/login">
        <p
          
          style={{
            float: "right",
          }}
        >
          Already have an account? Login.
        </p>
      </Link>
    </Form>
  );
};

export default RegisterInputs;
