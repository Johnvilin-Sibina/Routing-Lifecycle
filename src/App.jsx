import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Topbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
