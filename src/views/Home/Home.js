import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div style={{ background: "#eee" }} className="pt-3">
      <h2 className="container ">Ofertas</h2>
      <hr className="container" />
      <ItemListContainer />
    </div>
  );
};

export default Home;
