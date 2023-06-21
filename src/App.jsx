import React from "react";
import "./style/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Archive from "./pages/Archive";

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
