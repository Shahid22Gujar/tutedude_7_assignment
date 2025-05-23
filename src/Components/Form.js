import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { validatePassword, validateEmail } from "../utils";
// import validateEmail from '../utils'
function FormComponent() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      if (value && !validateEmail(value.trim())) {
        setEmailError("The email field has a valid email format.");
      } else {
        setEmailError("");
      }
    }
    if (name === "password") {
      if (value && !validatePassword(value.trim())) {
        setPasswordError(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
      } else {
        setPasswordError("");
      }
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (emailError || passwordError) {
      alert("Please fix the errors before submitting.");
      return;
    }
    alert("Form Submitted!");
    setPassword("");
    setEmail("");
  };
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            placeholder="Enter email"
            required
            onChange={(event) => setEmail(event.target.value)}
            onBlur={handleBlur}
          />
          {emailError && (
            <Form.Text className=" mt-2 text-danger">{emailError}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            required
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            onBlur={handleBlur}
          />
          {passwordError && (
            <Form.Text className=" mt-2 text-danger">{passwordError}</Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormComponent;
