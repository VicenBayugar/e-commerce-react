import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Link
            to={`/Detail/${product.id}`}
            className="etiquetaLink"
            key={product.id}
          >
            <Item data={product} />
          </Link>
        );
      })}
    </>
  );
};

export default ItemList;
