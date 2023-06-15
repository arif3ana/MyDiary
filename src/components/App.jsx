import React from "react";
import "../style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Archive from "./Archive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path='archive' element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
