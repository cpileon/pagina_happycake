import Navbar from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/contacto" element={<Contacto />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
