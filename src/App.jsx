import React from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/Home' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
    </>
  );
}

export default App;
