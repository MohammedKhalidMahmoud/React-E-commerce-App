import { useContext } from "react";
import { CartContext } from "./CartsProv"; // Correct import

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
