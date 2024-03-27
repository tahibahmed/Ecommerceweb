import React from "react";
import { Routes, Route } from "react-router-dom";
import { Splash, Login, NotFound, Register ,Layout , Home , NewArrival } from "./pages";

import "./App.css";
import ProductDetail from "./pages/web/productDetails";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newArrival" element={<NewArrival />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Route>
      
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
