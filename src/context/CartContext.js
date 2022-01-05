import React, { useState } from "react";

export const carritoContext = React.createContext();

const CartContext = (props) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <carritoContext.Provider value={{ carrito, setCarrito }}>
      {props.children}
    </carritoContext.Provider>
  );
};

export default CartContext;
