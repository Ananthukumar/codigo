import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Home from "./pages";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
 <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
   
     
    </Routes>
  </BrowserRouter>
  <Footer />
  </>
  )
 
}

export default App;
