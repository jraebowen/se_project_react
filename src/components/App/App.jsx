import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
// import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import ItemModal from "../ItemModal/ItemModal";
// import WeatherCard from "../WeatherCard/WeatherCard"; //Is this needed since it's a child of main?
// import ItemCard from "../ItemCard/ItemCard"; //Is this needed since it's a child of main?

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
