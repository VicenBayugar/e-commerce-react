import React from "react";
import ItemCount from "../ItemCount.js/ItemCount";

const ItemListContainer = () => {
  return (
    <div className="container pt-4 pb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <ItemCount
          precio="1000"
          precioEnUSD="5"
          nombreProducto="Iphone 12"
          descripcion="128gb RED"
          stock="10"
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
