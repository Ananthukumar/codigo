import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Home from "./pages";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
// import Tags from "./components/Tags";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
  return (
    <>
 <Header />
 {/* <Tags /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />

   
     
    </Routes>
  </BrowserRouter>
  <Footer />
  </>
  )
 
}

export default App;
