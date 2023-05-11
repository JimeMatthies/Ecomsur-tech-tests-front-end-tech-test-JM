import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</BrowserRouter>
  );
};

export default App;