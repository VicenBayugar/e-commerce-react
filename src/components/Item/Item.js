import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ data }) => {
  return (
    <div className="col">
      <div className="card shadow">
        <img src={data.image} class="card-img-top pt-2" alt="#"></img>
        <div className="card-body mx-auto">
          <h5 className="card-title text-center">${data.price}</h5>
          <h6 className="card-text text-center">{data.title}</h6>
          <p className="text-center">{data.description}</p>
          <p className="small text-center">Cantidad disponible: 10</p>
        </div>
        <ItemCount />
      </div>
    </div>
  );
};

export default Item;
