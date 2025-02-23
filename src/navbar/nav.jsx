import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = ({ variant = "dark", bg = "dark" }) => {
  return (
    <Navbar bg={bg} data-bs-theme={variant}>
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/create-product">Create Product</Nav.Link>
          <Nav.Link as={Link} to="/sigin">SignIn</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
