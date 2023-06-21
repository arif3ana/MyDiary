import React from "react";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Archive from "./pages/Archive";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='archive' element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
