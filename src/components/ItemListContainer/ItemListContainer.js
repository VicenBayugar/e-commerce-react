import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, 2000);
  }, []);

  return (
    <div className="container pt-4 pb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => {
          return <Item data={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
