import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function Signin() {
  const [auth, setAuth] = useState("");
  const [loading, setLoading] = useState(true); // Declare loading state
  const [error, setError] = useState(""); // Declare error state

  useEffect(() => {
    const fetchCredentials = async () => {
      // Fixed the typo here (fetchProducts -> fetchCredentials)
      try {
        const response = await fetch("http://10.191.243.51:5000/api/users/signin");
        if (!response.ok) {
          throw new Error("Failed to fetch credentials");
        }
        const data = await response.json();
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCredentials(); // Call fetchCredentials here
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error)
    return <p className="text-danger text-center mt-4">Error: {error}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    // Checking if the credentials are correct
    if (
      e.target.email.value === "Hello@gmail.com" &&
      e.target.password.value === "12345"
    ) {
      console.log("success");
      setAuth(true); // Set auth to true for successful login
    } else {
      console.log("failure");
      setAuth(false); // Set auth to false for failure
    }
    console.log("Email:", e.target.email.value);
    console.log("Password:", e.target.password.value);
  }

  return (
    <>
      <Form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <br />

        {/* Feedback */}
        {auth === false && (
          <p style={{ color: "red" }}>Invalid credentials, please try again.</p>
        )}
        {auth === true && (
          <p style={{ color: "green" }}>Successfully logged in!</p>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signin;
