import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./Topbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import { Routes, BrowserRouter, Route} from "react-router-dom";
import Blog from "./Blog";
import Politics from "./Politics";
import Sports from "./Sports";
import Products from "./Products";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  let getData = async () => {
    try {
      const productData = await fetch(
        "https://65fba50a14650eb2100a446c.mockapi.io/products",
        { method: "GET" })
       
     
      const productsResp = await productData.json();
      setProducts(productsResp);
      console.log(productsResp)
      
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home products={products} getData={getData}/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products products={products} getData={getData} />} ></Route>
          <Route path="/product/:productid" element={<Product/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}>
            <Route path="politics" element={<Politics />}></Route>
            <Route path="sports" element={<Sports />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
