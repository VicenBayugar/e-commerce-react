import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Carrito from "./views/Carrito/Carrito";
import ItemDetail from "./views/ItemDetail/ItemDetail";
import Footer from "./components/Footer/Footer";
import Productos from "./views/Productos/Productos";
import NavBar from "./components/NavBar/NavBar";
import CartContext from "./context/CartContext";

const App = () => {
  return (
    <Router>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Detail/:id" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </CartContext>
    </Router>
  );
};

export default App;
