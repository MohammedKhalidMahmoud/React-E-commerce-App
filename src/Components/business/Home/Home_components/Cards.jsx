import { useContext } from "react";
import { CartContext } from "../../../cart/CartsProv";
import { Card, Button } from "react-bootstrap";

const Cards = ({ name, description, stock, price }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    const newItem = { name, description, stock, price };
    setCart([...cart, newItem]); // Add item to cart
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body style={{ textAlign: "left" }}>
        <h2>{name}</h2>
        <h3 style={{ fontSize: "1.2rem", color: "#555" }}>{description}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bold", margin: 0 }}>Stock: {stock}</p>
          <p style={{ fontSize: "1.2rem", color: "green", fontWeight: "bold" }}>
            ${price}
          </p>
        </div>
        <Button variant="primary" className="mt-3" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
