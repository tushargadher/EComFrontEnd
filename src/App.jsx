import React from "react";
import DataProvider from "../context/DataProvider";
import Header from "./Componets/Header/Header";
import Home from "./Componets/Home/Home";
import Cart from "./Componets/Cart/Cart";
import DetailsView from "./Componets/Details/DetailsView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<DetailsView />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
