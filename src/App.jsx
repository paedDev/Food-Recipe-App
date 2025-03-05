import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import Details from "./pages/details";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div className="bg-red-200">
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
