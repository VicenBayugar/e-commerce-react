import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const ListContainerProductos = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const obtenerProducts = async () => {
      const data = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const productsObtenidos = await data.json();
      setProducts(productsObtenidos);
      setLoader(false);
    };
    obtenerProducts();
  }, []);
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div className="container pt-4 pb-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <ItemList products={products} />
          </div>
        </div>
      )}
    </>
  );
};

export default ListContainerProductos;
