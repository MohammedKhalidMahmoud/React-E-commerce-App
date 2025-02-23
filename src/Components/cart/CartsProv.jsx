import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

const CartsProv = ({ children }) => {
  // Load cart from local storage or default to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartsProv;
