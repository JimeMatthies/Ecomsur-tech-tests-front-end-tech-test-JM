import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Details from "./components/Details";
import Footer from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Details/>} />
    </Routes>
    <Footer />
</BrowserRouter>
  );
};

export default App;
