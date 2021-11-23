import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
      </>
    );
  }
}

export default App;
