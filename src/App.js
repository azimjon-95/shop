import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import SingelPage from "./components/singelPage/SingelPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/singelPage/:id" element={<SingelPage />} />

      </Routes>
    </div>
  )
}

export default App;