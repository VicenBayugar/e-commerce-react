import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const ListContainerProductos = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((json) => setProducts(json));
    setLoader(false);
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
