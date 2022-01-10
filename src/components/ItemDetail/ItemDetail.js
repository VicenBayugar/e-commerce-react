import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { carritoContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import Mas from "../../assets/mas.png";
import Menos from "../../assets/menos.png";

const ItemDetail = ({ producto }) => {
  const { carrito, setCarrito } = useContext(carritoContext);
  const [counter, setCounter] = useState(1);

  function agregarAlCarrito() {
    const isInCart = carrito.some((p) => p.id === producto.id);
    if (!isInCart) {
      producto = { ...producto, quantity: counter };
      setCarrito([...carrito, producto]);
      Swal.fire({
        icon: "success",
        title: "Producto añadido!",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      const addQuantity = carrito.find((prod) => prod.id === producto.id);
      addQuantity.quantity = addQuantity.quantity + counter;
      setCarrito([...carrito]);
      Swal.fire({
        icon: "success",
        title: "Producto añadido!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }

  return (
    <div className="container bg-white">
      <div className=" shadow row row-cols-1 row-cols-md-2">
        <div className="mt-auto mb-auto col">
          <img src={producto.image} className=" p-1 imgDetail" alt="#"></img>
        </div>
        <div className="p-2 mx-auto col mt-auto mb-auto">
          <h5 className=" text-center">{producto.title}</h5>
          <p className="small text-center">{producto.description}</p>
          <hr />
          <h5 className=" text-center">US${producto.price}</h5>
          <div className="d-flex justify-content-center align-items-center pb-2">
            <button
              className="btn pe-3 botones"
              onClick={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
            >
              <img src={Menos} alt="menos" width={20}></img>
            </button>
            {counter}
            <button
              className="btn px-3 botones"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <img src={Mas} alt="mas" width={20}></img>
            </button>
          </div>
          <div
            className="d-grid gap-2 col-9 mx-auto pb-3"
            onClick={() => agregarAlCarrito()}
          >
            <button className="btn btn-outline-primary">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
