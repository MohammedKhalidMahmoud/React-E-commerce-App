import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const CreateProduct = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxLCJpYXQiOjE3NDAzMjA0ODYsImV4cCI6MTc0MDQwNjg4Nn0.8uPla1ucmmyWYBA4jUHORUEZzMc_FdsU6P0ENM16g8A";

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]:
        name === "price" || name === "stock" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
      };

      console.log("Sending data:", JSON.stringify(requestBody));

      const response = await fetch("http://10.191.243.51:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Product created successfully!");
        setProduct({ name: "", description: "", price: "", stock: "" });
      } else {
        alert("Error creating product.");
        console.error("Response:", response);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to server.");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Create Product</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    value={product.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder="Enter product description"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={product.price}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    placeholder="Enter stock quantity"
                    value={product.stock}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Create Product
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProduct;
