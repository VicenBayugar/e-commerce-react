import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    const obtenerItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const itemObtenido = await data.json();
      setItem(itemObtenido);
    };
    obtenerItem();
  }, [id]);

  return (
    <div className="container pt-4 pb-5 d-flex justify-content-center">
      <div className="itemDetailContainer">
        <ItemDetail producto={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
