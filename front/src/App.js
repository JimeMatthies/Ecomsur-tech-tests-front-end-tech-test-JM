import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer />
</BrowserRouter>
  );
};

export default App;
