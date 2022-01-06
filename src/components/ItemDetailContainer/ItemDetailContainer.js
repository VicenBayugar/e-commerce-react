import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const obtenerItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const itemObtenido = await data.json();
      setItem(itemObtenido);
      setLoader(false);
    };
    obtenerItem();
  }, [id]);

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div className="container vh-75  d-flex justify-content-center align-items-center">
          <div className="itemDetailContainer">
            <ItemDetail producto={item} />
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
