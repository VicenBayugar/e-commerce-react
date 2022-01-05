import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div style={{ background: "#eee" }}>
      <h2 className="container pt-3">Ofertas</h2>
      <hr className="container" />
      <ItemListContainer />
    </div>
  );
};

export default Home;
