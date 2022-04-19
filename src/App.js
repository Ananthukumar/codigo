import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Home from "./pages";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
 <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
   
     
    </Routes>
  </BrowserRouter>
  <Footer />
  </>
  )
 
}

export default App;
