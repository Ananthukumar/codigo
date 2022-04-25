import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import Upload from "./pages/Upload";
// import Tags from "./components/Tags";
import Login from "./pages/Login";
import ViewProfile from "./pages/Viewprofile";
import Signup from "./pages/Signup";


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
        <Route path="/upload" element={<Upload />} />     
        <Route path="/login" element={<Login />} />     
        <Route path="/signup" element={<Signup />} />     
        <Route path="/viewprofile" element={<ViewProfile />} />     
    </Routes>
  </BrowserRouter>
  <Footer />
  </>
  )
}

export default App;
