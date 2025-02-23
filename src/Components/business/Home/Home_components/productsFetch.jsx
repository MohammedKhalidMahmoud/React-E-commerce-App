import { useState, useEffect } from "react";
import Cards from "./Cards"; // Import Cards component
import { Container, Row, Col } from "react-bootstrap";

const ProductsFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://10.191.243.51:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error)
    return <p className="text-danger text-center mt-4">Error: {error}</p>;

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Products</h2>
      <Row className="justify-content-center g-4">
        {" "}
        {/* Add spacing with g-4 */}
        {products.map((product) => (
          <Col key={product.productId} xs={12} sm={6} md={4} lg={3}>
            {" "}
            {/* Bootstrap Grid */}
            <Cards
              name={product.name}
              description={product.description}
              stock={product.stock}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsFetch;
