import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="col">
      <div className="card shadow">
        <img
          src={data.image}
          height={300}
          className="card-img-top pt-2 itemImg"
          alt="#"
        ></img>
        <div className="card-body mx-auto">
          <h5 className="card-title text-center">US${data.price}</h5>
          <h6 className="card-text text-center">{data.title}</h6>
        </div>
      </div>
    </div>
  );
};

export default Item;
