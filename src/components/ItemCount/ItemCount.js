import React, { useState } from "react";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";

const ItemCount = ({ nombreProducto, descripcion, precio, precioEnUSD }) => {
  const [counter, setCounter] = useState(1);

  const counterUp = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const counterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-evenly pb-2">
        <button type="button" className="btn" onClick={counterDown}>
          <RemoveButton />
        </button>
        <p>{counter}</p>
        <button type="button" className="btn" onClick={counterUp}>
          <AddButton />
        </button>
      </div>
      <div className="d-grid gap-2 col-9 mx-auto pb-3">
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#resumenCarrito"
          className="btn btn-outline-primary"
          id=""
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
