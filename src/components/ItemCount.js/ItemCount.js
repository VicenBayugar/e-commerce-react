import React, { useState } from "react";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";

const ItemCount = ({
  nombreProducto,
  descripcion,
  stock,
  precio,
  precioEnUSD,
}) => {
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
    <div className="col">
      <div className="card shadow">
        {/* <img src="img/${producto.img}" class="card-img-top pt-2" alt="#"> */}
        <div className="card-body mx-auto">
          <h5 className="card-title text-center">
            ARS ${precio} / USD ${precioEnUSD}
          </h5>
          <h6 className="card-text text-center">{nombreProducto}</h6>
          <p className="text-center">{descripcion}</p>
          <p className="small text-center">Cantidad disponible: {stock}</p>
        </div>
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
      </div>
    </div>
  );
};

export default ItemCount;
