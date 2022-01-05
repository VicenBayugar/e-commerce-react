import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    fetch("https://fakestoreapi.com/products/category/electronics?limit=4")
      .then((response) => response.json())
      .then((json) => setProducts(json));
    setLoader(true);
  }, []);

  return (
    <>
      {loader ? (
        <div className="container pt-4 pb-5 itemListContainer">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <ItemList products={products} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemListContainer;
