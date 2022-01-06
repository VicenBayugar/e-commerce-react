import React from "react";
import ListContainerProductos from "../../components/ListContainerProductos/ListContainerProductos";

const Productos = () => {
  return (
    <div style={{ background: "#eee" }} className="pt-3">
      <h2 className="container ">Productos</h2>
      <hr className="container" />
      <ListContainerProductos />
    </div>
  );
};

export default Productos;
