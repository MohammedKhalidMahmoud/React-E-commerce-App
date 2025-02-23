import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-4 text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Company Name</h5>
            <p>
              Bringing innovation and creativity to the digital world. Stay
              connected with us on social media.
            </p>
          </Col>

          <Col md={2} className="mb-3">
            <h5 className="text-uppercase fw-bold">Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">React</a></li>
              <li><a href="#" className="text-light">Vue</a></li>
              <li><a href="#" className="text-light">Angular</a></li>
              <li><a href="#" className="text-light">Laravel</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-3">
            <h5 className="text-uppercase fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Pricing</a></li>
              <li><a href="#" className="text-light">Settings</a></li>
              <li><a href="#" className="text-light">Orders</a></li>
              <li><a href="#" className="text-light">Help</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Contact</h5>
            <p className="mb-1">📍 New York, NY 10012, US</p>
            <p className="mb-1">✉ info@example.com</p>
            <p className="mb-1">📞 +1 234 567 88</p>
          </Col>
        </Row>

        <Row className="text-center py-3 border-top">
          <Col>
            <span>© {new Date().getFullYear()} Company Name. All rights reserved.</span>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <a href="#" className="text-light me-3 fs-5"><FaFacebookF /></a>
            <a href="#" className="text-light me-3 fs-5"><FaTwitter /></a>
            <a href="#" className="text-light me-3 fs-5"><FaGoogle /></a>
            <a href="#" className="text-light me-3 fs-5"><FaInstagram /></a>
            <a href="#" className="text-light me-3 fs-5"><FaLinkedin /></a>
            <a href="#" className="text-light fs-5"><FaGithub /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
