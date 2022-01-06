import React, { useContext } from "react";
// import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemDetail.css";
import { carritoContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ producto }) => {
  const { carrito, setCarrito } = useContext(carritoContext);

  const agregarAlCarrito = () => {
    setCarrito([...carrito, producto]);
    Swal.fire({
      icon: "success",
      title: "Producto añadido!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  // const [cantidad, setCantidad] = useState(1);

  // function agregarCantidad(cnt) {
  //   setCantidad(cnt);
  //   producto = { ...producto, quantity: cantidad };
  //   setCarrito([...carrito, producto]);
  // }

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
          <div
            className="d-grid gap-2 col-9 mx-auto pb-3"
            onClick={() => agregarAlCarrito()}
          >
            <button className="btn btn-outline-primary">
              Agregar al carrito
            </button>
          </div>
          {/* <ItemCount onAdd={agregarCantidad} /> */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
