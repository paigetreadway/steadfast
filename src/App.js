import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Warranty from "./components/Warranty";
import Support from "./components/Support";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/support" element={<Support />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
